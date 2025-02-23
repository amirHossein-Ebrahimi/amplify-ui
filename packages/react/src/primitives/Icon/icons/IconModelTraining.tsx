import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconModelTraining = (props) => {
  const { className, ...rest } = props;
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5 13.5C15.5 15.5 13 17 13 18.5H11C11 17 8.5 15.5 8.5 13.5C8.5 11.57 10.07 10 12 10C13.93 10 15.5 11.57 15.5 13.5ZM13 19.5H11V21H13V19.5ZM19 13C19 14.68 18.41 16.21 17.42 17.42L18.84 18.84C20.18 17.27 21 15.23 21 13C21 10.26 19.77 7.81 17.84 6.16L16.42 7.58C17.99 8.86 19 10.82 19 13ZM16 5L12 1V4C7.03 4 3 8.03 3 13C3 15.23 3.82 17.27 5.16 18.84L6.58 17.42C5.59 16.21 5 14.68 5 13C5 9.14 8.14 6 12 6V9L16 5Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
