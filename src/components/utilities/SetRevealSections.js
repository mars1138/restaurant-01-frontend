const SetRevealSections = (trigger = 0.35) => {
  const allSections = [...document.getElementsByTagName('section')];

  const revealSection = (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('hidden');
    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: trigger,
  });

  allSections.forEach((section) => {
    sectionObserver.observe(section);
    section.classList.add('hidden');
  });
};

export default SetRevealSections;
