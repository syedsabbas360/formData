var formData = [{
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [{
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

for (let i = 0; i < formData.length; i++) {
  console.log(formData[i].type)
  let form = document.querySelector('.form')
  let select = document.createElement("select")
  let options = document.createElement("ul");
  let langList= document.createElement("li");
  //add text content to langList.  The content must be extracted
  // from index=4 in formData .
  // langList.textContent=?
  if (formData[i].type === "select") {
    select.placeholder = formData[i].label
    select.style = "display: flex; margin: 3vw; width: 90%;"
    select.appendChild(options);
    options.appendChild(langList);
    form.appendChild(select);
    
  } else {
    let input = document.createElement('input')
    input.type = formData[i].type
    input.placeholder = formData[i].label
    input.style = "display: flex; margin: 3vw; width: 90%; "
    form.appendChild(input)
  }
}
