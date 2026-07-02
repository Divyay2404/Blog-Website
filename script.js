const blogs = [
  {
    title: "How to Stay Productive While Working From Home",
    date: "July 2, 2026",
    category: "Productivity",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    summary: "Create a dedicated workspace, follow a simple routine, and take regular breaks to stay focused and balanced.",
    fullText: `
      <p>Working from home gives you freedom, but it also requires discipline. Without a clear routine, it becomes easy to lose focus, delay important work, or mix personal time with office tasks. The best way to stay productive is to begin your day with a simple plan and a clean workspace.</p>

      <p>Try choosing three important tasks every morning and finish them before moving to smaller activities. Keep your phone away while working, avoid unnecessary distractions, and take short breaks after focused work sessions. These small habits can make your day feel more organized and less stressful.</p>

      <p>Most importantly, create a proper ending time for your workday. When you work from home, it is easy to continue working late into the evening. A healthy routine helps you protect your energy and maintain balance between work and personal life.</p>
    `
  },
  {
    title: "Simple Design Tips for Better Websites",
    date: "July 3, 2026",
    category: "Design",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    summary: "Use clean layouts, readable fonts, strong spacing, and consistent colors to make your website feel professional.",
    fullText: `
      <p>A professional website does not need to be complicated. In fact, simple websites are often easier to use and more pleasant to read. Start with a clean layout, enough white space, and a clear structure so visitors can quickly understand your content.</p>

      <p>Good typography is also very important. Use readable fonts, proper font sizes, and enough line spacing. Avoid using too many colors or too many different font styles. A limited color palette makes your website look cleaner and more trustworthy.</p>

      <p>Finally, make sure your buttons, links, and images support the purpose of the page. Every section should guide the visitor naturally. When design is simple and consistent, the whole website feels more polished and professional.</p>
    `
  },
  {
    title: "Why Writing Every Day Improves Your Thinking",
    date: "July 4, 2026",
    category: "Writing",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    summary: "Daily writing helps you organize ideas, improve clarity, and communicate your thoughts with more confidence.",
    fullText: `
      <p>Writing every day is one of the best ways to improve your thinking. When you write, you slow down your thoughts and turn unclear ideas into clear sentences. This process helps you understand what you actually believe and where your ideas need more work.</p>

      <p>You do not need to write long essays every day. Even a short journal entry, a paragraph about something you learned, or a few notes about your goals can be useful. The habit matters more than the length. Over time, daily writing makes your thoughts more organized.</p>

      <p>Writing also improves communication. When you practice explaining ideas regularly, you become better at sharing them with others. This skill is useful in school, work, business, and personal life.</p>
    `
  }
];

const blogList = document.getElementById("blogList");

blogs.forEach((blog, index) => {
  const card = document.createElement("article");
  card.className = "blog-card";

  card.innerHTML = `
    <img src="${blog.image}" alt="${blog.title}">
    <div class="blog-content">
      <span class="category">${blog.category}</span>
      <h3>${blog.title}</h3>
      <p class="date">${blog.date}</p>
      <p>${blog.summary}</p>
      <button onclick="openBlog(${index})">Read More</button>
    </div>
  `;

  blogList.appendChild(card);
});

function openBlog(index) {
  const blog = blogs[index];

  const newWindow = window.open("", "_blank");

  newWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${blog.title}</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f5f7fa;
          color: #222;
        }

        .article-header {
          background:
            linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
            url("${blog.image}");
          background-size: cover;
          background-position: center;
          color: white;
          padding: 100px 20px;
          text-align: center;
        }

        .article-header h1 {
          max-width: 850px;
          margin: auto;
          font-size: 44px;
        }

        .article-header p {
          margin-top: 15px;
          color: #eee;
        }

        .article-content {
          max-width: 850px;
          margin: 40px auto;
          background: white;
          padding: 35px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .article-content p {
          font-size: 18px;
          line-height: 1.8;
          color: #444;
          margin-bottom: 22px;
        }

        .back-btn {
          display: inline-block;
          margin-top: 20px;
          background: #111827;
          color: white;
          text-decoration: none;
          padding: 12px 18px;
          border-radius: 8px;
        }

        @media (max-width: 600px) {
          .article-header h1 {
            font-size: 32px;
          }

          .article-content {
            margin: 25px 15px;
            padding: 25px;
          }
        }
      </style>
    </head>
    <body>
      <header class="article-header">
        <h1>${blog.title}</h1>
        <p>${blog.date} • ${blog.category}</p>
      </header>

      <main class="article-content">
        ${blog.fullText}
        <a href="#" onclick="window.close()" class="back-btn">Close Article</a>
      </main>
    </body>
    </html>
  `);

  newWindow.document.close();
}
