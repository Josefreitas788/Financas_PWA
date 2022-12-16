import IconButton from '../IconButton';

function Header({ icon, month }) {
  var icon = icon.active
    ? require('icon-active')
    : require('icon-inactive');
  return (
    <header>
      <Image source={icon} />
      <IconButton
        name="right"
        backgroundColor="transparent"
        color="#139892"
        size={30}
        alignContent="center"
      />
      <Text>{month}</Text>
      <IconButton
        name="left"
        backgroundColor="transparent"
        color="#139892"
        size={30}
        alignContent="center"
      />
    </header>
  );
}

export default btn;

