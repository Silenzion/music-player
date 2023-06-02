import { mount } from "@vue/test-utils";
import AudioPlayer from "../src/modules/AudioPlayer/components/AudioPlayer.vue";

test("renders a audio player", () => {
  const wrapper = mount(AudioPlayer);

  const todo = wrapper.get(".audio-player__title");

  expect(todo.text()).toBe("Playing now");
});
