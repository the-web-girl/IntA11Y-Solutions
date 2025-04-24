const portfolio = [
    {
      title: "Portfolio responsive pour un photographe",
      description: "Création d'un portfolio accessible pour un photographe professionnel.",
      image: "https://images.pexels.com/photos/1560072/pexels-photo-1560072.jpeg"
    },
    {
      title: "Refonte d'un site d'association inclusive",
      description: "Refonte d'un site pour une association avec un design inclusif et respectant les normes d'accessibilité.",
      image: "https://images.pexels.com/photos/1615455/pexels-photo-1615455.jpeg"
    },
    {
      title: "Template WordPress sur-mesure accessible",
      description: "Développement d'un template WordPress personnalisé pour une expérience utilisateur optimale et accessible.",
      image: "https://images.pexels.com/photos/2650871/pexels-photo-2650871.jpeg"
    },
    {
      title: "Audit RGAA d'une administration locale",
      description: "Audit d'accessibilité RGAA pour une administration locale, avec des recommandations détaillées.",
      image: "https://images.pexels.com/photos/3408743/pexels-photo-3408743.jpeg"
    },
    {
      title: "Landing page écoresponsable et inclusive",
      description: "Conception d'une landing page respectueuse de l'environnement et accessible à tous.",
      image: "https://images.pexels.com/photos/3556127/pexels-photo-3556127.jpeg"
    }
  ];

  const grid = document.getElementById("portfolio-grid");


  portfolio.forEach((project, i) => {
    const div = document.createElement("div");
    div.className = "portfolio";
    div.innerHTML = `
      <img src="${project.image}" alt="Image du projet ${i + 1}" class="portfolio-img" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;

    grid.appendChild(div);
  });