export default class Canvas {
  palette () {
    return {
      width: '654rpx',
      height: '1000rpx',
      background: '#eee',
      views: [
        _textDecoration('overline', 0),
        _textDecoration('underline', 1),
        _textDecoration('line-through', 2),
        _textDecoration('overline underline line-through', 3, 'red'),
        {
          type: 'text',
          text: "fontWeight: 'bold'",
          css: [
            {
              top: `${startTop + 4 * gapSize}rpx`,
              fontWeight: 'bold'
            },
            common
          ]
        },
        {
          type: 'text',
          text: '我是把width设置为400rpx后，我就换行了',
          css: [
            {
              top: `${startTop + 5 * gapSize}rpx`,
              width: '400rpx'
            },
            common
          ]
        },
        {
          type: 'text',
          text: '我设置了maxLines为1，看看会产生什么效果',
          css: [
            {
              top: `${startTop + 7 * gapSize}rpx`,
              width: '500rpx',
              maxLines: 1
            },
            common
          ]
        },
        _image(0),
        _des(0, '普通'),
        _image(1, 30),
        _des(1, 'rotate: 30'),
        _image(2, 30, '20rpx'),
        _des(2, 'borderRadius: 30rpx'),
        _image(3, 0, '60rpx'),
        _des(3, '圆形'),
        {
          type: 'qrcode',
          content: 'https://github.com/Kujiale-Mobile/Painter',
          css: {
            top: '20rpx',
            right: '20rpx',
            width: '120rpx',
            height: '120rpx'
          }
        }
      ]
    }
  }
}

const startTop = 50
const startLeft = 20
const gapSize = 70
const common = {
  left: `${startLeft}rpx`,
  fontSize: '40rpx'
}

function _textDecoration (decoration, index, color) {
  return {
    type: 'text',
    text: decoration,
    css: [
      {
        top: `${startTop + index * gapSize}rpx`,
        color: color,
        textDecoration: decoration
      },
      common
    ]
  }
}

function _image (index, rotate, borderRadius) {
  return {
    type: 'image',
    url: '/static/me.png',
    css: {
      top: `${startTop + 8.5 * gapSize}rpx`,
      left: `${startLeft + 160 * index}rpx`,
      width: '120rpx',
      height: '120rpx',
      rotate: rotate,
      borderRadius: borderRadius
    }
  }
}

function _des (index, content) {
  const des = {
    type: 'text',
    text: content,
    css: {
      fontSize: '22rpx',
      top: `${startTop + 8.5 * gapSize + 140}rpx`
    }
  }
  if (index === 3) {
    des.css.right = '60rpx'
  } else {
    des.css.left = `${startLeft + 120 * index + 30}rpx`
  }
  return des
}
