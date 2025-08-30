import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Residents',
    url: '/residents',
    iconComponent: { name: 'cil-people' }
  },
  {
    name: 'Documents',
    url: '/documents',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-description' },
  },
  {
    name: 'Components',
    title: true
  },
  {
    title: true,
    name: 'Documents'
  },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'nav-icon-bullet'
  //     }
  //   ]
  // },
  {
    title: true,
    name: 'Links',
    class: 'mt-auto'
  },
  {
    name: 'Register',
    url: '/register',
    iconComponent: { name: 'cil-user-plus' }
  }
];
