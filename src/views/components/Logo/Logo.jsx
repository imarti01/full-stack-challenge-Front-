export const Logo = ({ color = 'purple', className }) => {
  return (
    <img
      className={className}
      src={
        color === 'purple'
          ? 'https://res.cloudinary.com/duokspzx0/image/upload/v1684762519/fullstackchallenge/logo_ouynt4.png'
          : 'https://res.cloudinary.com/duokspzx0/image/upload/v1684762519/fullstackchallenge/logowhite_rvk1jf.png'
      }
      alt="logo"
    />
  );
};
