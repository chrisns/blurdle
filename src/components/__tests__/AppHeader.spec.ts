// // import { describe, it, expect } from "vitest";

// // import { mount } from "@vue/test-utils";
// // import AppHeader from "../AppHeader.vue";

// // describe("HelloWorld", () => {
// //   it("renders properly", () => {
// //     const wrapper = mount(AppHeader);
// //     expect(wrapper.text()).toContain("Blurdle");
// //   });
// // });

// import { describe, it, expect } from "vitest";
// import vuetify from "../../plugins/vuetify";
// import * as components from "vuetify/components";
// import * as directives from "vuetify/directives";

// import { mount, shallowMount } from "@vue/test-utils";
// import AppHeader from "@/components/AppHeader.vue";

// describe.skip("HelloWorld", () => {
//   const vvuetify = vuetify;

//   it("renders properly", () => {
//     console.log(vvuetify);
//     const wrapper = mount(AppHeader, {
//       global: {
//         plugins: [vvuetify],
//       },
//       props: { title: "Hello Vitest" },
//     });
//     expect(wrapper.text()).toContain("Hello Vitest");
//   });
// });
