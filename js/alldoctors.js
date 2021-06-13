let doctorContainer = document.getElementById("all");
let allDoctors = [
    { name: "محمد احمد", photo: "../../images/D-images/testimonial-2.jpg", tittel: "اسم القسم" },
    { name: "محمود محمد", photo: "../../images/D-images/client-1.png", tittel: "اسم القسم" },
    { name: "احمدابراهيم", photo: "../../images/D-images/client-3.png", tittel: "اسم القسم" },
    { name: " محمد عاطف", photo: "../../images/D-images/client-4.png", tittel: "اسم القسم" },
    { name: "احمد جودة ", photo: "../../images/D-images/client-6.png", tittel: "اسم القسم" },
    { name: " مصطفي سند", photo: "../../images/D-images/3.jpg", tittel: "اسم القسم" },
    { name: " اسامة حسن", photo: "../../images/D-images/2.jpg", tittel: "اسم القسم" },
    { name: " احمد حامد", photo: "../../images/D-images/client-7.png", tittel: "اسم القسم" },
];


function viewAllDoctors() {
    let container = ''

    for (let i = 0; i < allDoctors.length; i++) {
        container += `  <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="mb-3 p-3 doctor-item bg-white">
      <a href="./doctorDetails.html" class="text-decoration-none">
          
              <div class="doctor-img mx-auto">
                  <img src =${allDoctors[i].photo} alt="doctor" class="rounded-circle shadow">
                </div>
              <h4 class="mt-3">${allDoctors[i].name}</h4>
              <h6 class="">اسم القسم</h6>
      </a>
      </div>

  </div>`
    }
    doctorContainer.innerHTML = container;
};
viewAllDoctors();
