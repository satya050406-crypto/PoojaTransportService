import os

html_files = [
    "packers-movers-lucknow.html",
    "packers-movers-kanpur.html",
    "packers-movers-varanasi.html",
    "packers-movers-dehradun.html",
    "packers-movers-greater-noida.html"
]

old_header = """  <header class="header">
    <div class="nav">
      <nav>
        <a href="../index.html">Home</a>
        <a href="../service.html">Services</a>
        <a href="../contact.html">Contact</a>
      </nav>

      <div class="logo">
        <a href="../index.html">
          <img src="../image/logo.png" alt="Pooja Transport Service">
        </a>
      </div>
    </div>
  </header>"""

new_header = """  <!-- ================= TOPBAR ================= -->
  <div class="topbar">
    <div class="topbar-contact">
      <span>📞 +91 9211396141</span>
      <span class="hide-mobile">📧 poojatransportservice3@gmail.com</span>
    </div>
    <div class="topbar-social">
      <a href="../contact.html">24/7 Support Available</a>
    </div>
  </div>

  <!-- ================= HEADER ================= -->
  <header class="header">
    <div class="nav">
      <div class="logo">
        <a href="../index.html">
          <img src="../image/logo.png" alt="Pooja Transport Service">
        </a>
      </div>

      <nav>
        <a href="../index.html">Home</a>
        <a href="../service.html">Services</a>
        <a href="../contact.html">Contact</a>
      </nav>
    </div>
  </header>"""

import re

for file in html_files:
    path = os.path.join("c:/Users/acer/Packers and movers/Safe-Hands-Packers-and-Movers/cities", file)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # regex to match the header block accurately regardless of comments above it
    pattern = re.compile(r'  <header class="header">.*?  </header>', re.DOTALL)
    
    if pattern.search(content):
        content = pattern.sub(new_header, content)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file}")
    else:
        print(f"Header not found in {file}")
