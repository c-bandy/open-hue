angular.module('game')
  .factory('levelTemplateService', () => {
    const templates = [
      {
        name: 'first steps',
        matrix:
          'xxx\n' +
          'xox\n'.repeat(8) +
          'xxx\n',
        corners: {
          topLeft: '#86D3E6',
          topRight: '#86D3E6',
          bottomLeft: '#006E90',
          bottomRight: '#006E90',
        },
      },
      {
        name: 'oyasumi',
        matrix: 'x4ox\n'.repeat(6),
        corners: {
          topLeft: '#3F0039',
          topRight: '#820046',
          bottomLeft: '#B10D45',
          bottomRight: '#E05917',
        },
      },
      {
        name: 'lake',
        matrix:
          '6x\n' +
          'x4ox\n'.repeat(2) +
          '6x\n'.repeat(2) +
          'x4ox\n'.repeat(2) +
          '6x',
        corners: {
          topLeft: '#5B9279',
          topRight: '#5AB1BB',
          bottomLeft: '#8FCB9B',
          bottomRight: '#9ee2ea',
        },
      },
    ];

    return {
      templates,
    };
  });
