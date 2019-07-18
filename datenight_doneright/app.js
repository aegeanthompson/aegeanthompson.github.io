$( () => {

  const $openBtn = $('#openModal');
  const $modal = $('#modal');
  const $closeBtn = $('#close');

  const $openBtn2 = $('#buttonIn');
  const $modal2 = $('#modal2');
  const $closeBtn2 = $('#close2');

  const $openBtn3 = $('#buttonMovie');
  const $modal3 = $('#modal3');
  const $closeBtn3 = $('#close3');

  const openModal = () => {
    $modal.css('display', 'block');
  }

  const openModal2 = () => {
    $modal.css('display', 'none');
    $modal2.css('display', 'block');
  }

  const openModal3 = () => {
    $modal2.css('display', 'none');
    $modal3.css('display', 'block');
  }

  const closeModal = () => {
    $modal.css('display', 'none');
  }

  const closeModal2 = () => {
    $modal2.css('display', 'none');
  }

  const closeModal3 = () => {
    $modal3.css('display', 'none');
  }



  $openBtn.on('click', openModal);

  $closeBtn.on('click', closeModal);

  $openBtn2.on('click', openModal2);

  $closeBtn2.on('click', closeModal2);

  $openBtn3.on('click', openModal3);

  $closeBtn3.on('click', closeModal3);



// $.ajax({
//
//             }
//         );
    });
