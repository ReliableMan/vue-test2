<template>
<div class="container">
  <br>
  <h2>Редактор протокола</h2>
  <br>
  <div class="accordion accordion-flush" id="accordionFlushExample">
    <!-- аккордеон 1 -->
  <div class="accordion-item">
    <h3>Голова</h3>
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed bg-primary bg-gradient" style="--bs-bg-opacity: .2;" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Блок описания
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <!-- // --------------------------------------------- -->
          <br>
          <div class="input-group mb-3 container ">
            <input type="text" class="form-control border border-primary" placeholder="Введите текст"  aria-describedby="button-addon2">
            <button class="btn btn-outline-primary" type="button" id="button-addon2">Сохранить</button>
          </div>
      
          <div class="accordion accordion-flush" id="accordionFlushExample1">
            <!-- под аккордеон 1 -->  
              <div class="accordion-item container">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne-1" aria-expanded="false" aria-controls="flush-collapseOne">
                    Блок описания подробный
                  </button>
                </h2>
                <div id="flush-collapseOne-1" class="accordion-collapse collapse" aria-labelledby="flush-headingOne-1" data-bs-parent="#accordionFlushExample1">

                <br>
                  <div class="input-group mb-3 container ">
                    <input type="text" class="form-control border border-primary" placeholder="Введите текст"  aria-describedby="button-addon2">
                    <button class="btn btn-outline-primary" type="button" id="button-addon2">Сохранить</button>
                  </div>

                </div>
              </div>
            <!-- под аккордеон 2 -->           
            <div class="accordion-item container">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-1" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Блок описания сокращенный
                </button>
              </h2>
              <div id="flush-collapseTwo-1" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo-1" data-bs-parent="#accordionFlushExample1">

                <br>
                <div class="input-group mb-3 container ">
                  <input type="text" class="form-control border border-primary" placeholder="Введите текст"  aria-describedby="button-addon2">
                  <button class="btn btn-outline-primary" type="button" id="button-addon2">Сохранить</button>
                </div>

              </div>
            </div>
  
</div>

    </div>
  </div>
  <!-- аккордеон 2 -->
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed bg-primary bg-gradient" style="--bs-bg-opacity: .4;" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Блок рекомендаций
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>

  <!-- аккордеон 3 -->
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed bg-primary bg-gradient" style="--bs-bg-opacity: .6;" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Блок заключения
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
