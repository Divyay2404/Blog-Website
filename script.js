const blogs = [
  {
    title: "How to Stay Productive While Working From Home",
    date: "July 2, 2026",
    category: "Productivity",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    content: "Create a dedicated workspace, follow a simple routine, and take regular breaks to stay focused and balanced."
  },
  {
    title: "Simple Design Tips for Better Websites",
    date: "July 3, 2026",
    category: "Design",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    content: "Use clean layouts, readable fonts, strong spacing, and consistent colors to make your website feel professional."
  },
  {
    title: "Why Writing Every Day Improves Your Thinking",
    date: "July 4, 2026",
    category: "Writing",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    content: "Daily writing helps you organize ideas, improve clarity, and communicate your thoughts with more confidence."
  }
];

const blogList = document.getElementById("blogList");

blogs.forEach((blog) => {
  const card = document.createElement("article");
  card.className = "blog-card";

  card.innerHTML = `
    <img src="${blog.image}" alt="${blog.title}">
    <div class="blog-content">
      <span class="category">${blog.category}</span>
      <h3>${blog.title}</h3>
      <p class="date">${blog.date}</p>
      <p>${blog.content}</p>
      <button onclick="readMore('${blog.title}')">Read More</button>
    </div>
  `;

  blogList.appendChild(card);
});

function readMore(title) {
  alert("Opening article: " + title);
}