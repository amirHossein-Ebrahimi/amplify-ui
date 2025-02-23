import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconPhotoAlbum = (props) => {
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
          d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM11 4V9L10 8.25L9 9V4H11ZM18 20H6V4H7V13L10 10.75L13 13V4H18V20ZM11.28 17.96L9.5 15.81L7 19H17L13.78 14.74L11.28 17.96Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
