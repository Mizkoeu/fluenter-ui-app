import * as React from 'react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
import { initializeIcons } from 'office-ui-fabric-react';

const navigationStyles: Partial<INavStyles> = {
  root: {
    height: '100vh',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
    paddingTop: '10vh',
  },
};

const links: INavLinkGroup[] = [
    {
      links: [
        {
          name: 'Dashboard',
          key:'key1',
          url: '/',
          iconProps: {
            iconName: 'News',
            styles: {
              root: {
                fontSize: 20,
                color: '#106ebe',
              },
            }
          }
        },
        {
          name: 'Settings',
          key: 'key2',
          url: '/',
          iconProps: {
            iconName: 'PlayerSettings',
            styles: {
              root: {
                fontSize: 20,
                color: '#106ebe',
              },
            }
          }
        },
        {
          name: 'Transfer',
          key: 'key3',
          url: '/',
          iconProps: {
            iconName: 'SwitcherStartEnd',
            styles: {
              root: {
                fontSize: 20,
                color: '#106ebe',
              },
            }
          }
        },
        {
          name: 'Stats',
          key: 'key4',
          url: '/',
          iconProps: {
            iconName: 'StackedLineChart',
            styles: {
              root: {
                fontSize: 20,
                color: '#106ebe',
              },
            }
          }
        },
      ],
    },
  ];

export const NavBar: React.FunctionComponent = () => {
  initializeIcons();
  return (
    <Nav
      onLinkClick={_onLinkClick}
      selectedKey="key3"
      ariaLabel="Nav basic example"
      styles={navigationStyles}
      groups={links}
    />
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === 'News') {
    alert('News link clicked');
  }
}