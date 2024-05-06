<template>
  <section class="px-[44px] pt-2">
    <div class="pt-2 mb-20">
      <h1 class="font-black text-2xl my-3">Lộ trình học</h1>
      <p class="text-[15px] leading-6 max-w-[840px]">
        Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học.
        Ví dụ: Để đi làm với vị trí "Lập trình viên Front-end" bạn nên tập trung
        vào lộ trình "Front-end".
      </p>
    </div>
    <div class="container_body">
      <div class="container_front_end">
        <div class="flex">
          <div class="">
            <h2 class="m-0">
              <a
                href=""
                class="text-xl block font-extrabold text-[#333] hover:text-[#f8b600] pb-[14px]"
                >Lộ trình học Front-end</a
              >
            </h2>
            <p class="text-sm">
              Lập trình viên Front-end là người xây dựng ra giao diện websites.
              Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập
              trình viên Front-end nhé.
            </p>
          </div>
          <div class="flex items-center justify-center pl-[26px]">
            <a
              href=""
              class="flex items-center justify-center border-4 rounded-full w-[122px] h-[122px] border-orange-600"
            >
              <img
                src="https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png"
                alt=""
                class="w-[98px] h-[98px]"
              />
            </a>
          </div>
        </div>
        <div>
          <a
            href=""
            class="bg-[#f05123] rounded-full text-white py-[9px] px-4 inline-block mt-[20px]"
            >Xem chi tiết</a
          >
        </div>
      </div>
      <div class="container_back_end">
        <div class="flex flex-1">
          <div class="mb-5">
            <h2 class="m-0">
              <a
                href=""
                class="text-xl block font-extrabold text-[#333] hover:text-[#f8b600] pb-[14px]"
                >Lộ trình học Back-end</a
              >
            </h2>
            <p class="text-sm">
              Trái với Front-end thì lập trình viên Back-end là người làm việc
              với dữ liệu, công việc thường nặng tính logic hơn. Chúng ta sẽ
              cùng tìm hiểu thêm về lộ trình học Back-end nhé.
            </p>
          </div>
          <div class="flex items-center justify-center pl-[26px]">
            <a
              href=""
              class="flex items-center justify-center border-4 rounded-full w-[122px] h-[122px] border-orange-600"
            >
              <img
                src="https://files.fullstack.edu.vn/f8-prod/learning-paths/3/63b4641535b16.png"
                alt=""
                class="w-[98px] h-[98px]"
              />
            </a>
          </div>
        </div>
        <div class="flex">
          <div></div>
          <div
            v-for="item in items"
            :key="item.id"
            class="circular_progress_bar w-10 h-10 flex items-center justify-center ml-2 rounded-full border-orange-600 border-2"
          >
            <a
              class=""
              href=""
            >
              <img
                :src="item.img"
                alt=""
                class="w-[22px] h-[22px]"
              />
            </a>
          </div>
        </div>
        <div>
          <a
            href=""
            class="bg-[#f05123] rounded-full text-white py-[9px] px-4 inline-block mt-[20px]"
            >Xem chi tiết</a
          >
        </div>
      </div>
    </div>
    <div class="flex justify-between w-[1620px] mb-[50px]">
      <div class="mb-20 mt-20 w-[400px]">
        <h2 class="text-2xl font-extrabold">
          Tham gia cộng đồng học viên F8 trên Facebook
        </h2>
        <p class="text-sm">
          Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia
          hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.
        </p>
        <div>
          <a
            href=""
            class="hover:bg-[#0f0f0f] rounded-full border-2 border-gray-950 hover:text-white text-black py-[9px] px-4 inline-block mt-[20px]"
            >Tham gia nhóm</a
          >
        </div>
      </div>
      <div>
        <img
          class="w-[420px] h-[420px] relative rounded-xl"
          src="https://fullstack.edu.vn/static/media/fb-group-cards.4bd525b1b8baf7b1e5a2.png"
          alt="Học lập trình web (F8 - Fullstack.edu.vn)"
        />
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    setup() {
      const items = [
        {
          id: 1,
          img: 'https://files.fullstack.edu.vn/f8-prod/courses/7/6200b81f52d83.png',
          title: 'Lập trình Front-end căn bản',
        },
        {
          id: 2,
          img: 'https://files.fullstack.edu.vn/f8-prod/courses/1/6200ad9d8a2d8.png',
          title: 'Lập trình Front-end nâng cao',
        },
        {
          id: 3,
          img: 'https://files.fullstack.edu.vn/f8-prod/courses/12/6200af2620118.png',
          title: 'Lập trình Front-end căn bản',
        },
        {
          id: 4,
          img: 'https://files.fullstack.edu.vn/f8-prod/courses/14/624faac2ee23d.png',
          title: 'Lập trình Front-end nâng cao',
        },
        {
          id: 5,
          img: 'https://files.fullstack.edu.vn/f8-prod/courses/6/6200afb926038.png',
          title: 'Lập trình Front-end căn bản',
        },
        {
          id: 6,
          img: '	https://files.fullstack.edu.vn/f8-prod/courses/15/62385d6c63dfa.png',
          title: 'Lập trình Front-end nâng cao',
        },
      ];
      return {
        items,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .container_front_end {
    border: 2px solid #e8e8e8;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 24px;
    width: 500px;
  }
  .container_body {
    display: flex;
    margin-bottom: 50px;
  }
  .container_back_end {
    border: 2px solid #e8e8e8;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 24px;
    width: 500px;
    margin-left: 24px;
  }
</style>
