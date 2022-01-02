import TagListType1 from './TagListType1';
import TagListType2 from './TagListType2';
import TagListI18nType1 from './TagListI18nType1';
import TagListI18nType2 from './TagListI18nType2';

export default ({ Vue }) => {
  Vue.component('PluginTaggingTagListType1', TagListType1);
  Vue.component('PluginTaggingTagListType2', TagListType2);
  Vue.component('PluginTaggingTagListI18nType1', TagListI18nType1);
  Vue.component('PluginTaggingTagListI18nType2', TagListI18nType2);
};
