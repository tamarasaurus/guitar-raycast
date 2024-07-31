import { Action, ActionPanel, Detail, LaunchProps, List } from "@raycast/api";

type Arguments = {
  query: string;
};

export default function Command(props: LaunchProps<{ arguments: Arguments }>) {
  return (
    <>
      <List navigationTitle="Search guitar tabs">
        <List.Item
          title="🎸 Search Ultimate Guitar"
          subtitle={props.arguments.query}
          actions={
            <ActionPanel title="Tab search">
              <Action.OpenInBrowser
                url={`https://www.ultimate-guitar.com/search.php?search_type=title&value=${props.arguments.query}`}
              />
            </ActionPanel>
          }
        />
      </List>
    </>
  );
}
