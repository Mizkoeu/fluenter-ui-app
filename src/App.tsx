import React from 'react';
import { Stack, Text, Link, FontWeights } from 'office-ui-fabric-react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { NavBar } from './NavBar';
import { CardSample } from './CardSample';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const App: React.FunctionComponent = () => {
  return (
    <Stack>
      <Stack horizontal>
        <div className="ms-Grid-col ms-sm1 ms-xl1">
          <NavBar />
        </div>
        <Stack>
          <Stack padding={10}>
            <Label>Sample Website</Label>
          </Stack>
          <Stack horizontal horizontalAlign="space-between" gap={10}>
            <CardSample />
            <CardSample />
            <CardSample />
            <CardSample />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
