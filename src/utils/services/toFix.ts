const toFix = <T>(str: T) => {
  const k = Math.pow(10, 2);
  return (Math.floor(+str * k) / k);
};

export default toFix;