const toFix = (str: string) => {
  const k = Math.pow(10, 2);
  return (Math.floor(+str * k) / k);
};

export default toFix;