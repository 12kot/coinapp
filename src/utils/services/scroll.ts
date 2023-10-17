const scrollToElement = (id: string) => {
  const scroll = document.getElementById(id);
  if (scroll) scroll.scrollIntoView({ block: "start", behavior: "smooth" });
};

export default scrollToElement;
