import TagListAllType1 from './TagListAllType1';
import TagListAllType2 from './TagListAllType2';
import TagListI18nType1 from './TagListI18nType1';
import TagListI18nType2 from './TagListI18nType2';
import TagListDebug from './TagListDebug';

export default ({ Vue }) => {
  Vue.component('PluginTaggingTagListAllType1', TagListAllType1);
  Vue.component('PluginTaggingTagListAllType2', TagListAllType2);
  Vue.component('PluginTaggingTagListI18nType1', TagListI18nType1);
  Vue.component('PluginTaggingTagListI18nType2', TagListI18nType2);
  Vue.component('PluginTaggingTagListDebug', TagListDebug);
};
