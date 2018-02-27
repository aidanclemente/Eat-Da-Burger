// To make sure handlers are attached after the DOM is fully loaded
// $(function() {
//     // Change devour from false to true
//     $(".devour").on("click", function(event) {
//         console.log("you clicked devour");
        
//         // event.preventDefault();

//         var id = $(this).data("id");

//         console.log("id: ", id);
//         // var newDevour = $(this).data("devoured");
//         // console.log("newDevour: ", newDevour);

//         var eatenYes = {
//             devoured: 1
//         };

//         $.ajax("/burger/update" + id, {
//             type: "PUT",
//             data: eatenYes
//         }).then(function() {
//             console.log("changed devoured to ", eatenYes);
//             location.reload();
//         });
//     });

    



// })