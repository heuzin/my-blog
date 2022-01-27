import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconLookup, IconDefinition, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { MouseEventHandler } from 'react';
import classes from './StarIcon.module.css';

const startLookup: IconLookup = { prefix: 'fas', iconName: 'star' };
const startDefinition: IconDefinition = findIconDefinition(startLookup);

type Props = {
    onClick: MouseEventHandler<SVGSVGElement> | undefined;
    color: string;
};

const StarIcon: React.FC<Props> = ({ onClick, color }) => {
    return (
        <div>
            <FontAwesomeIcon
                size={'3x'}
                color={color}
                className={classes.icon}
                icon={startDefinition}
                onClick={onClick}
            />
        </div>
    );
};

export default StarIcon;
