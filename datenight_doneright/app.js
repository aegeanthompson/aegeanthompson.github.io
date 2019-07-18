$( () => {

  const $openBtn = $('#openModal');
  const $modal = $('#modal');
  const $closeBtn = $('#close');
  const $openBtn2 = $('#buttonIn');
  const $modal2 = $('#modal2');
  const $closeBtn2 = $('#close2');

  const openModal = () => {
    $modal.css('display', 'block');
  }

  const openModal2 = () => {
    $modal.css('display', 'none');
    $modal2.css('display', 'block');
  }

  const closeModal = () => {
    $modal.css('display', 'none');
  }

  const closeModal2 = () => {
    $modal2.css('display', 'none');
  }



  $openBtn.on('click', openModal);

  $closeBtn.on('click', closeModal);

  $openBtn2.on('click', openModal2);

  $closeBtn2.on('click', closeModal2);


$.ajax({

            }
        );
    });
