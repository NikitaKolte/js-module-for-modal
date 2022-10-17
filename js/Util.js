function modalChanges(){
    // console.log('name is ',param);
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const openModalBtn = document.querySelector(".btn-open");
    const closeModalBtn = document.querySelector(".btn-close");

    // close modal function
    const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    };

    // close the modal when the close button and overlay is clicked
    closeModalBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    // close modal when the Esc key is pressed
    document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
    });

    // open modal function
    const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    };
    // open modal event
    openModalBtn.addEventListener("click", openModal);
}



// const buttons = document.querySelectorAll('button');
// const modalContainer = document.querySelector('.modal-container');
// const modal = document.querySelector('.modal');

// let modalHidden = false;

// buttons.forEach(btn => {
//   btn.addEventListener('click', toggleModal);  
// })
// modalContainer.addEventListener('click', function(e) {
//         if (modalHidden || e.target !== this){
//           return
//         }
//         e.stopPropagation()
//         toggleModal()
//       }
//     )

// function toggleModal() {
//   modalHidden = !modalHidden
//   if(modalHidden){
//     return modalContainer.classList.add('hidden')
//   }
//   modalContainer.classList.remove('hidden')
// }


// sidebar 
function openNav() {
  document.getElementById("mySidebar").style.width = "500px";
  document.getElementById("main").style.marginLeft = "500px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}