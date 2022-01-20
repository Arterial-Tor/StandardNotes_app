import { Dropdown, DropdownItem } from '@/components/Dropdown';
import { IconType } from '@/components/Icon';
import { FeatureIdentifier, PrefKey } from '@standardnotes/snjs';
import {
  PreferencesGroup,
  PreferencesSegment,
  Subtitle,
  Text,
  Title,
} from '@/preferences/components';
import { WebApplication } from '@/ui_models/application';
import {
  ComponentArea,
  ComponentMutator,
  SNComponent,
} from '@standardnotes/snjs';
import { FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { HorizontalSeparator } from '@/components/shared/HorizontalSeparator';
import { Switch } from '@/components/Switch';

type Props = {
  application: WebApplication;
};

type EditorOption = DropdownItem & {
  value: FeatureIdentifier | 'plain-editor';
};

export const getIconAndTintForEditor = (
  identifier: FeatureIdentifier | undefined
): [IconType, number] => {
  switch (identifier) {
    case FeatureIdentifier.BoldEditor:
    case FeatureIdentifier.PlusEditor:
      return ['rich-text', 1];
    case FeatureIdentifier.MarkdownBasicEditor:
    case FeatureIdentifier.MarkdownMathEditor:
    case FeatureIdentifier.MarkdownMinimistEditor:
    case FeatureIdentifier.MarkdownProEditor:
      return ['markdown', 2];
    case FeatureIdentifier.TokenVaultEditor:
      return ['authenticator', 6];
    case FeatureIdentifier.SheetsEditor:
      return ['spreadsheets', 5];
    case FeatureIdentifier.TaskEditor:
      return ['tasks', 3];
    case FeatureIdentifier.CodeEditor:
      return ['code', 4];
    default:
      return ['plain-text', 1];
  }
};

const makeEditorDefault = (
  application: WebApplication,
  component: SNComponent,
  currentDefault: SNComponent
) => {
  if (currentDefault) {
    removeEditorDefault(application, currentDefault);
  }
  application.changeAndSaveItem(component.uuid, (m) => {
    const mutator = m as ComponentMutator;
    mutator.defaultEditor = true;
  });
};

const removeEditorDefault = (
  application: WebApplication,
  component: SNComponent
) => {
  application.changeAndSaveItem(component.uuid, (m) => {
    const mutator = m as ComponentMutator;
    mutator.defaultEditor = false;
  });
};

const getDefaultEditor = (application: WebApplication) => {
  return application.componentManager
    .componentsForArea(ComponentArea.Editor)
    .filter((e) => e.isDefaultEditor())[0];
};

export const Defaults: FunctionComponent<Props> = ({ application }) => {
  const [editorItems, setEditorItems] = useState<DropdownItem[]>([]);
  const [defaultEditorValue, setDefaultEditorValue] = useState(
    () =>
      getDefaultEditor(application)?.package_info?.identifier || 'plain-editor'
  );

  const [spellcheck, setSpellcheck] = useState(() =>
    application.getPreference(PrefKey.EditorSpellcheck, true)
  );

  const toggleSpellcheck = () => {
    setSpellcheck(!spellcheck);
    application.getAppState().toggleGlobalSpellcheck();
  };

  useEffect(() => {
    const editors = application.componentManager
      .componentsForArea(ComponentArea.Editor)
      .map((editor): EditorOption => {
        const identifier = editor.package_info.identifier;
        const [iconType, tint] = getIconAndTintForEditor(identifier);

        return {
          label: editor.name,
          value: identifier,
          ...(iconType ? { icon: iconType } : null),
          ...(tint ? { iconClassName: `color-accessory-tint-${tint}` } : null),
        };
      })
      .concat([
        {
          icon: 'plain-text',
          iconClassName: `color-accessory-tint-1`,
          label: 'Plain Editor',
          value: 'plain-editor',
        },
      ])
      .sort((a, b) => {
        return a.label.toLowerCase() < b.label.toLowerCase() ? -1 : 1;
      });

    setEditorItems(editors);
  }, [application]);

  const setDefaultEditor = (value: string) => {
    setDefaultEditorValue(value as FeatureIdentifier);
    const editors = application.componentManager.componentsForArea(
      ComponentArea.Editor
    );
    const currentDefault = getDefaultEditor(application);

    if (value !== 'plain-editor') {
      const editorComponent = editors.filter(
        (e) => e.package_info.identifier === value
      )[0];
      makeEditorDefault(application, editorComponent, currentDefault);
    } else {
      removeEditorDefault(application, currentDefault);
    }
  };

  return (
    <PreferencesGroup>
      <PreferencesSegment>
        <Title>Defaults</Title>
        <div className="mt-2">
          <Subtitle>Default Editor</Subtitle>
          <Text>New notes will be created using this editor.</Text>
          <div className="mt-2">
            <Dropdown
              id="def-editor-dropdown"
              label="Select the default editor"
              items={editorItems}
              value={defaultEditorValue}
              onChange={setDefaultEditor}
            />
          </div>
        </div>
        <HorizontalSeparator classes="mt-5 mb-3" />
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <Subtitle>Spellcheck</Subtitle>
            <Text>
              The default spellcheck value for new notes. Spellcheck can be configured per note from the note context menu.
              Spellcheck may degrade overall typing performance with long notes.
            </Text>
          </div>
          <Switch onChange={toggleSpellcheck} checked={spellcheck} />
        </div>
      </PreferencesSegment>
    </PreferencesGroup>
  );
};
