import { Platform, StyleSheet } from 'react-native';
import PlatformEnum from './data/PlatformEnum';

/**
 *
 */
export const styles = StyleSheet.create({
  root: {},
  view: {},
  codeBlock: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 4,
  },
  codeInline: {
    backgroundColor: '#fcedea',
    padding: 10,
    borderRadius: 3,
    color: '#c0341d'
  },
  del: {
    backgroundColor: '#000000',
  },
  em: {
    fontStyle: 'italic',
  },
  headingContainer: {
    flexDirection: 'row',
  },
  heading: {
    fontWeight: '600',
    color: '#233142',
  },
  heading1: {
    fontSize: 30,
  },
  heading2: {
    fontSize: 24,
  },
  heading3: {
    fontSize: 18,
  },
  heading4: {
    fontSize: 16,
  },
  heading5: {
    fontSize: 13,
  },
  heading6: {
    fontSize: 11,
  },
  hr: {
    backgroundColor: '#000000',
    height: 1,
  },
  blockquote: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 20,
    backgroundColor: '#CCCCCC',
  },
  inlineCode: {
    borderRadius: 3,
    borderWidth: 1,
    fontFamily: 'Courier',
    fontWeight: 'bold',
  },
  list: {},
  listItem: {
    flex: 1,
    flexWrap: 'wrap',
    // backgroundColor: 'green',
  },
  listUnordered: {},

  listUnorderedItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  listUnorderedItemIcon: {
    marginLeft: 10,
    marginRight: 10,
    color: '#000',
    fontSize: 6,
    ...Platform.select({
      [PlatformEnum.IOS]: {
        lineHeight: 26,
      },
      [PlatformEnum.ANDROID]: {
        lineHeight: 30,
      },
    }),
  },
  listUnorderedItemText: {
    fontSize: 18,
    lineHeight: 18,
  },

  listOrdered: {},
  listOrderedItem: {
    flexDirection: 'row',
  },
  listOrderedItemIcon: {
    marginLeft: 10,
    marginRight: 10,
    ...Platform.select({
      [PlatformEnum.IOS]: {
        lineHeight: 26,
      },
      [PlatformEnum.ANDROID]: {
        lineHeight: 26,
      },
    }),
  },
  listOrderedItemText: {
    fontWeight: 'bold',
    lineHeight: 18,
  },
  paragraph: {
    marginTop: 5,
    marginBottom: 5,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  hardbreak: {
    width: '100%',
    height: 1,
  },
  strong: {
    fontWeight: 'bold',
  },
  table: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 3,
  },
  tableHeader: {},
  tableHeaderCell: {
    flex: 1,
    // color: '#000000',
    padding: 5,
    // backgroundColor: 'green',
  },
  tableRow: {
    borderBottomWidth: 1,
    borderColor: '#000000',
    flexDirection: 'row',
  },
  tableRowCell: {
    flex: 1,
    padding: 5,
  },
  text: {},
  strikethrough: {
    textDecorationLine: 'line-through',
  },
  link: {
    textDecorationLine: 'underline',
  },
  blocklink: {
    flex: 1,
    borderColor: '#000000',
    borderBottomWidth: 1,

  },
  u: {
    borderColor: '#000000',
    borderBottomWidth: 1,
  },
  image: {
    flex: 1,
  },
  imageBox: {
    flex: 1,
  },
  modalCloseButton: {
    position: 'absolute',
    top: 38,
    left: 30,
    height: 50,
    width: 50,
    zIndex: 99,
  },
  modalCloseIcon: {
    color: '#f7f9ff',
    fontSize: 20,
  }
});