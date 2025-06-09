import type { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: '1',
    name: 'Keyboard Guidance System',
    description: 'An LED-based piano teaching contraption that reads notes from a MIDI file and displays them on an LED strip corresponding to the keys.',
    imageUrl: '/keyboard.png',
    imageAiHint: 'website mockup',
    projectUrl: 'https://github.com/dxiong3/Keyboard-Guidance-System',
    tags: ['C', 'Beaglebone', 'MIDI', 'Linux'],
  },
  {
    id: '2',
    name: 'MultiWordle',
    description: 'An app that allows users to play Wordle games with words of varying lengths, including custom words. It features OAuth for user authentication and score tracking.',
    imageUrl: '/multiwordle-logo.png',
    imageAiHint: 'application interface',
    projectUrl: '#',
    tags: ['TypeScript', 'React Native', 'Firebase', 'Expo', 'Clerk'],
  },
  {
    id: '3',
    name: 'Gamify Your Life',
    description: 'A web app that allows users to set goals for what they want to accomplish, with action items to chip away at the goal, giving it a game-like feel.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'blog layout',
    projectUrl: '#',
    tags: ['TypeScript', 'React', 'Node.Js', 'MongoDB'],
  },
  // {
  //   id: '4',
  //   name: 'AI Powered Chatbot',
  //   description: 'An intelligent chatbot leveraging natural language processing to provide customer support and answer queries. Integrated with multiple messaging platforms.',
  //   imageUrl: 'https://placehold.co/600x400.png',
  //   imageAiHint: 'chatbot interface',
  //   projectUrl: '#',
  //   tags: ['Python', 'Dialogflow', 'Flask', 'Docker'],
  // },
];
