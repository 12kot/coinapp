const validatePurchase = (coinCount: number, value: number): string => {
  if (!!!value) {
    return "The value cannot be empty";
  }

  if (value > coinCount) {
    return "Too many coins, less pliz";
  }

  if (value <= 0) return "You can't sell coins here";

  return "";
};

export default validatePurchase;
