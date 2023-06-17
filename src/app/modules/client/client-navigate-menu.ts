import { NavigateMenuModel } from '../../shared/models/navigate-menu.model';

export const clientNavigateMenu: NavigateMenuModel[] = [
  // {
  //   icon: 'document',
  //   name: 'Document',
  //   url: 'document'
  // },
  {
    icon: 'writing',
    name: 'Writing',
    url: 'writing',
    children: [
      {
        icon: 'task-1',
        name: 'Task 1',
        url: 'task-1',
      },
      {
        icon: 'task-2',
        name: 'Task 2',
        url: 'task-2',
      }
    ]
  },
  {
    icon: 'reading',
    name: 'Reading',
    url: 'reading'
  },
  {
    icon: 'Listening',
    name: 'Listening',
    url: 'listening'
  },
  {
    icon: 'speaking',
    name: 'Speaking',
    url: 'speaking'
  }
];
