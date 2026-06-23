export type Skill = { name: string; icon: string };

export const skills: Record<string, Skill[]> = {
  Programming: [
    { name: "Python", icon: "https://img.icons8.com/color/48/000000/python--v1.png" },
    { name: "SQL", icon: "https://img.icons8.com/color/48/000000/sql.png" },
  ],
  "Libraries & Frameworks": [
    { name: "Pandas", icon: "https://img.icons8.com/color/48/000000/pandas.png" },
    { name: "NumPy", icon: "https://img.icons8.com/color/48/000000/numpy.png" },
    {
      name: "Matplotlib",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/1200px-Matplotlib_icon.svg.png",
    },
    { name: "Seaborn", icon: "https://seaborn.pydata.org/_static/logo-mark-lightbg.svg" },
    {
      name: "Scikit-Learn",
      icon: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png",
    },
  ],
  "AI/ML": [
    {
      name: "Supervised Learning",
      icon: "https://img.icons8.com/color/48/000000/artificial-intelligence.png",
    },
    {
      name: "Unsupervised Learning",
      icon: "https://img.icons8.com/color/48/000000/artificial-intelligence.png",
    },
    { name: "Regression", icon: "https://img.icons8.com/fluency/48/000000/line-chart.png" },
    {
      name: "Classification",
      icon: "https://img.icons8.com/color/48/000000/sorting-answers.png",
    },
    {
      name: "Model Evaluation",
      icon: "https://img.icons8.com/color/48/000000/test-passed.png",
    },
    {
      name: "Computer Vision",
      icon: "https://img.icons8.com/color/48/000000/facial-recognition-scan.png",
    },
    {
      name: "Video Analytics",
      icon: "https://img.icons8.com/color/48/000000/video-call.png",
    },
  ],
  "Tools & Platforms": [
    { name: "Jupyter Notebook", icon: "https://img.icons8.com/fluency/48/000000/jupyter.png" },
    { name: "GitHub", icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png" },
    {
      name: "VS Code",
      icon: "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png",
    },
    { name: "PyCharm", icon: "https://img.icons8.com/color/48/000000/pycharm.png" },
    { name: "Power BI", icon: "https://img.icons8.com/color/48/000000/power-bi.png" },
  ],
};
