import TagListAllType1 from './components/TagListAllType1.vue';
import TagListAllType2 from './components/TagListAllType2.vue';
import TagListI18nType1 from './components/TagListI18nType1.vue';
import TagListI18nType2 from './components/TagListI18nType2.vue';
import Debug from './components/Debug.vue';

export default ({ Vue }) => {
  Vue.component('PluginTaggingTagListAllType1', TagListAllType1);
  Vue.component('PluginTaggingTagListAllType2', TagListAllType2);
  Vue.component('PluginTaggingTagListI18nType1', TagListI18nType1);
  Vue.component('PluginTaggingTagListI18nType2', TagListI18nType2);
  Vue.component('PluginTaggingTagListDebug', Debug);
};
