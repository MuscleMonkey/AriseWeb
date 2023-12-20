for (let i = 0; i < 5; i++) {
    let para = document.createElement("p");
    para.setAttribute("id", "short-description");
    para.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.Non diam phasellus vestibulum lorem sed. Volutpat diam utvenenatis tellus in metus.";

    let h3 = document.createElement("h3");
    h3.setAttribute("id", "item-title");
    h3.textContent = "Title";

    let title_paragraph = document.createElement("section");
    title_paragraph.setAttribute("id", "title-paragraph");
    title_paragraph.appendChild(h3);
    title_paragraph.appendChild(para);
    
    let img = document.createElement("img");
    img.setAttribute("src", "OIP.jpg");
    img.setAttribute("class","article-img")

    let anchorImage = document.createElement("a");
    anchorImage.setAttribute("href", '"#link"');
    anchorImage.appendChild(img);
    

    let item = document.createElement("article");
    item.setAttribute("class", "item");
    item.setAttribute("id", "item");
    item.appendChild(anchorImage);
    item.appendChild(title_paragraph);

    let hr = document.createElement("hr");
    let main = document.getElementById("main");
    main.appendChild(item);
    main.appendChild(hr);
  }