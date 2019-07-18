$( () => {

// const headerItems = () => {}

  const $openBtn = $('#openModal');
  const $modal = $('#modal');
  const $closeBtn = $('#close');


  const openModal = () => {
    $modal.css('display', 'block');
  }

  const closeModal = () => {
    $modal.css('display', 'none');
  }

  $openBtn.on('click', openModal);

  $closeBtn.on('click', closeModal);


// $.ajax({
//             url:'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get:new7:US&p=1&t=ns&st=adv',
//             type = 'GET',
//             dataType = 'json',
//             contentType: 'application/json; charset=utf-8',
//             beforeSend: setHeader;
//         }).done(
//             (data) => {
//               console.log("it's working");
//                 // $("#title").html(data.Title);
//                 // $("#year").html(data.Year);
//                 // $("#rated").html(data.Rated);
//             },
//             (error) => {
//                 console.log(error);
//             }
//         );
    });
