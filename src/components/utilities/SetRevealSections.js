const SetRevealSections = (trigger = 0.35) => {
    const allSections = [...document.getElementsByTagName('section')];
    console.log(allSections);

  const revealSection = (entries, observer) => {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('hidden');
    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: trigger,
  });

  allSections.forEach((section) => {
    console.log(section);
    sectionObserver.observe(section);
    section.classList.add('hidden');
  });
};

export default SetRevealSections;
