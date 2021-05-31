import heroImage from '../../assets/hero.png';
import './MessageAndHeroImage.css';
import { MESSAGE, MESSAGE_TITLE } from '../../utils/Constants';

export const MessageAndHeroImage = () => {
  return (
    <div className='text-image-wrapper'>
      <div />
      <div className='text-wrapper'>
        <div className='title'>{MESSAGE_TITLE}</div>
        <div className='message'>{MESSAGE}</div>
      </div>
      <div className='hero-image-wrapper'>
        <img src={heroImage} alt='hero' className='hero-image' />
      </div>
      <div />
    </div>
  );
};
