const Image = ({src, alt}) => {
  return (
    <div className="h-auto w-full object-cover">
      <img src={src} alt={alt} className="h-full w-full"/>
    </div>
  );
}

export default Image;