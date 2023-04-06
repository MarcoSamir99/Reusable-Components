import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);
 
  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = <div><Button onClick={ handleClose } primary>I Accept</Button></div>;
  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
        Here is the ipmortant agreement to accept
    </p>
  </Modal>

 return (
 <div>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, augue sit amet consequat tincidunt, purus nisi efficitur sapien, in aliquet nibh nibh sed nisi. Sed tristique ultrices risus in accumsan. Vivamus ultricies elit non risus condimentum viverra. Sed elementum auctor sem id auctor. Sed elementum lectus eget ex varius egestas. Donec luctus tristique libero quis sagittis. Aliquam condimentum bibendum lobortis. Mauris commodo ac ligula a vulputate. Cras sit amet nulla rhoncus, volutpat dui eget, rutrum nisl.

Nulla imperdiet facilisis nunc, in fringilla nisl rutrum quis. Vestibulum leo tellus, varius ac cursus nec, scelerisque nec leo. Nunc id velit nec lectus eleifend dignissim nec et sem. Vestibulum et aliquet augue, vel pharetra ipsum. Praesent non sodales nisi. Nam lobortis lacus et eros aliquam viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu tellus suscipit, ultrices orci pulvinar, pellentesque mi. Aliquam erat volutpat. In cursus sodales elementum. Curabitur tincidunt diam ut interdum varius. Donec lacinia, nibh placerat ullamcorper aliquam, nisi tortor faucibus nibh, sit amet feugiat lacus lectus quis massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec bibendum ex dui, ut rhoncus elit faucibus et.

Ut sit amet orci non nunc malesuada finibus. Morbi purus lectus, blandit sed eros ac, interdum fermentum lorem. Integer odio velit, tempor nec faucibus id, congue viverra enim. Pellentesque sed nulla ut purus aliquam aliquet. Ut nec consequat felis. Maecenas sit amet lobortis enim, eget vehicula lorem. Praesent vulputate diam nisl, eget euismod mauris pretium sed.

Mauris venenatis euismod lorem, non faucibus justo suscipit vitae. Sed sit amet nunc turpis. Aliquam vel consequat lectus, ut placerat lectus. Pellentesque eu mi nec sapien luctus rhoncus eget nec nibh. In ultricies magna elit. Suspendisse accumsan leo tortor, sit amet mattis libero vestibulum nec. In vehicula porta ultricies. Donec vitae odio efficitur, tristique ipsum non, porta massa. Fusce varius accumsan aliquam. Morbi rhoncus purus vulputate, condimentum nisl et, hendrerit massa. Ut et quam vitae mauris facilisis malesuada ut id justo. Integer finibus elit quis tortor pharetra, et rutrum nisl congue. Maecenas efficitur eros et odio commodo, sit amet malesuada erat ultricies. Nulla elementum risus ex, a semper diam placerat vel. Sed dapibus massa ex, vel lacinia augue mattis quis.

Nunc aliquam nulla quis odio efficitur, ut sodales quam mollis. Quisque consectetur sollicitudin ligula vel aliquam. Praesent pharetra tellus eget nunc viverra egestas. Donec maximus velit sed orci tincidunt fringilla. Sed ornare lobortis dui, id tincidunt nulla feugiat elementum. Praesent rutrum orci eget aliquam porta. Aliquam ac nibh vulputate lorem congue posuere. Aenean ullamcorper facilisis velit, at egestas ante elementum in. Suspendisse at lacus erat. Nullam tempor venenatis nisi, vitae posuere arcu blandit at. Suspendisse potenti. Aenean gravida, velit a dapibus congue, nunc sapien sollicitudin lorem, at suscipit leo arcu a velit. Proin libero ligula, porttitor sollicitudin tincidunt ut, convallis vitae magna. Vestibulum eros massa, mollis eu sodales eu, posuere vitae massa. Aenean gravida auctor posuere.
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, augue sit amet consequat tincidunt, purus nisi efficitur sapien, in aliquet nibh nibh sed nisi. Sed tristique ultrices risus in accumsan. Vivamus ultricies elit non risus condimentum viverra. Sed elementum auctor sem id auctor. Sed elementum lectus eget ex varius egestas. Donec luctus tristique libero quis sagittis. Aliquam condimentum bibendum lobortis. Mauris commodo ac ligula a vulputate. Cras sit amet nulla rhoncus, volutpat dui eget, rutrum nisl.

Nulla imperdiet facilisis nunc, in fringilla nisl rutrum quis. Vestibulum leo tellus, varius ac cursus nec, scelerisque nec leo. Nunc id velit nec lectus eleifend dignissim nec et sem. Vestibulum et aliquet augue, vel pharetra ipsum. Praesent non sodales nisi. Nam lobortis lacus et eros aliquam viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu tellus suscipit, ultrices orci pulvinar, pellentesque mi. Aliquam erat volutpat. In cursus sodales elementum. Curabitur tincidunt diam ut interdum varius. Donec lacinia, nibh placerat ullamcorper aliquam, nisi tortor faucibus nibh, sit amet feugiat lacus lectus quis massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec bibendum ex dui, ut rhoncus elit faucibus et.

Ut sit amet orci non nunc malesuada finibus. Morbi purus lectus, blandit sed eros ac, interdum fermentum lorem. Integer odio velit, tempor nec faucibus id, congue viverra enim. Pellentesque sed nulla ut purus aliquam aliquet. Ut nec consequat felis. Maecenas sit amet lobortis enim, eget vehicula lorem. Praesent vulputate diam nisl, eget euismod mauris pretium sed.

Mauris venenatis euismod lorem, non faucibus justo suscipit vitae. Sed sit amet nunc turpis. Aliquam vel consequat lectus, ut placerat lectus. Pellentesque eu mi nec sapien luctus rhoncus eget nec nibh. In ultricies magna elit. Suspendisse accumsan leo tortor, sit amet mattis libero vestibulum nec. In vehicula porta ultricies. Donec vitae odio efficitur, tristique ipsum non, porta massa. Fusce varius accumsan aliquam. Morbi rhoncus purus vulputate, condimentum nisl et, hendrerit massa. Ut et quam vitae mauris facilisis malesuada ut id justo. Integer finibus elit quis tortor pharetra, et rutrum nisl congue. Maecenas efficitur eros et odio commodo, sit amet malesuada erat ultricies. Nulla elementum risus ex, a semper diam placerat vel. Sed dapibus massa ex, vel lacinia augue mattis quis.

Nunc aliquam nulla quis odio efficitur, ut sodales quam mollis. Quisque consectetur sollicitudin ligula vel aliquam. Praesent pharetra tellus eget nunc viverra egestas. Donec maximus velit sed orci tincidunt fringilla. Sed ornare lobortis dui, id tincidunt nulla feugiat elementum. Praesent rutrum orci eget aliquam porta. Aliquam ac nibh vulputate lorem congue posuere. Aenean ullamcorper facilisis velit, at egestas ante elementum in. Suspendisse at lacus erat. Nullam tempor venenatis nisi, vitae posuere arcu blandit at. Suspendisse potenti. Aenean gravida, velit a dapibus congue, nunc sapien sollicitudin lorem, at suscipit leo arcu a velit. Proin libero ligula, porttitor sollicitudin tincidunt ut, convallis vitae magna. Vestibulum eros massa, mollis eu sodales eu, posuere vitae massa. Aenean gravida auctor posuere.
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, augue sit amet consequat tincidunt, purus nisi efficitur sapien, in aliquet nibh nibh sed nisi. Sed tristique ultrices risus in accumsan. Vivamus ultricies elit non risus condimentum viverra. Sed elementum auctor sem id auctor. Sed elementum lectus eget ex varius egestas. Donec luctus tristique libero quis sagittis. Aliquam condimentum bibendum lobortis. Mauris commodo ac ligula a vulputate. Cras sit amet nulla rhoncus, volutpat dui eget, rutrum nisl.

Nulla imperdiet facilisis nunc, in fringilla nisl rutrum quis. Vestibulum leo tellus, varius ac cursus nec, scelerisque nec leo. Nunc id velit nec lectus eleifend dignissim nec et sem. Vestibulum et aliquet augue, vel pharetra ipsum. Praesent non sodales nisi. Nam lobortis lacus et eros aliquam viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu tellus suscipit, ultrices orci pulvinar, pellentesque mi. Aliquam erat volutpat. In cursus sodales elementum. Curabitur tincidunt diam ut interdum varius. Donec lacinia, nibh placerat ullamcorper aliquam, nisi tortor faucibus nibh, sit amet feugiat lacus lectus quis massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec bibendum ex dui, ut rhoncus elit faucibus et.

Ut sit amet orci non nunc malesuada finibus. Morbi purus lectus, blandit sed eros ac, interdum fermentum lorem. Integer odio velit, tempor nec faucibus id, congue viverra enim. Pellentesque sed nulla ut purus aliquam aliquet. Ut nec consequat felis. Maecenas sit amet lobortis enim, eget vehicula lorem. Praesent vulputate diam nisl, eget euismod mauris pretium sed.

Mauris venenatis euismod lorem, non faucibus justo suscipit vitae. Sed sit amet nunc turpis. Aliquam vel consequat lectus, ut placerat lectus. Pellentesque eu mi nec sapien luctus rhoncus eget nec nibh. In ultricies magna elit. Suspendisse accumsan leo tortor, sit amet mattis libero vestibulum nec. In vehicula porta ultricies. Donec vitae odio efficitur, tristique ipsum non, porta massa. Fusce varius accumsan aliquam. Morbi rhoncus purus vulputate, condimentum nisl et, hendrerit massa. Ut et quam vitae mauris facilisis malesuada ut id justo. Integer finibus elit quis tortor pharetra, et rutrum nisl congue. Maecenas efficitur eros et odio commodo, sit amet malesuada erat ultricies. Nulla elementum risus ex, a semper diam placerat vel. Sed dapibus massa ex, vel lacinia augue mattis quis.

Nunc aliquam nulla quis odio efficitur, ut sodales quam mollis. Quisque consectetur sollicitudin ligula vel aliquam. Praesent pharetra tellus eget nunc viverra egestas. Donec maximus velit sed orci tincidunt fringilla. Sed ornare lobortis dui, id tincidunt nulla feugiat elementum. Praesent rutrum orci eget aliquam porta. Aliquam ac nibh vulputate lorem congue posuere. Aenean ullamcorper facilisis velit, at egestas ante elementum in. Suspendisse at lacus erat. Nullam tempor venenatis nisi, vitae posuere arcu blandit at. Suspendisse potenti. Aenean gravida, velit a dapibus congue, nunc sapien sollicitudin lorem, at suscipit leo arcu a velit. Proin libero ligula, porttitor sollicitudin tincidunt ut, convallis vitae magna. Vestibulum eros massa, mollis eu sodales eu, posuere vitae massa. Aenean gravida auctor posuere.
    </p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, augue sit amet consequat tincidunt, purus nisi efficitur sapien, in aliquet nibh nibh sed nisi. Sed tristique ultrices risus in accumsan. Vivamus ultricies elit non risus condimentum viverra. Sed elementum auctor sem id auctor. Sed elementum lectus eget ex varius egestas. Donec luctus tristique libero quis sagittis. Aliquam condimentum bibendum lobortis. Mauris commodo ac ligula a vulputate. Cras sit amet nulla rhoncus, volutpat dui eget, rutrum nisl.

Nulla imperdiet facilisis nunc, in fringilla nisl rutrum quis. Vestibulum leo tellus, varius ac cursus nec, scelerisque nec leo. Nunc id velit nec lectus eleifend dignissim nec et sem. Vestibulum et aliquet augue, vel pharetra ipsum. Praesent non sodales nisi. Nam lobortis lacus et eros aliquam viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu tellus suscipit, ultrices orci pulvinar, pellentesque mi. Aliquam erat volutpat. In cursus sodales elementum. Curabitur tincidunt diam ut interdum varius. Donec lacinia, nibh placerat ullamcorper aliquam, nisi tortor faucibus nibh, sit amet feugiat lacus lectus quis massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec bibendum ex dui, ut rhoncus elit faucibus et.

Ut sit amet orci non nunc malesuada finibus. Morbi purus lectus, blandit sed eros ac, interdum fermentum lorem. Integer odio velit, tempor nec faucibus id, congue viverra enim. Pellentesque sed nulla ut purus aliquam aliquet. Ut nec consequat felis. Maecenas sit amet lobortis enim, eget vehicula lorem. Praesent vulputate diam nisl, eget euismod mauris pretium sed.

Mauris venenatis euismod lorem, non faucibus justo suscipit vitae. Sed sit amet nunc turpis. Aliquam vel consequat lectus, ut placerat lectus. Pellentesque eu mi nec sapien luctus rhoncus eget nec nibh. In ultricies magna elit. Suspendisse accumsan leo tortor, sit amet mattis libero vestibulum nec. In vehicula porta ultricies. Donec vitae odio efficitur, tristique ipsum non, porta massa. Fusce varius accumsan aliquam. Morbi rhoncus purus vulputate, condimentum nisl et, hendrerit massa. Ut et quam vitae mauris facilisis malesuada ut id justo. Integer finibus elit quis tortor pharetra, et rutrum nisl congue. Maecenas efficitur eros et odio commodo, sit amet malesuada erat ultricies. Nulla elementum risus ex, a semper diam placerat vel. Sed dapibus massa ex, vel lacinia augue mattis quis.

Nunc aliquam nulla quis odio efficitur, ut sodales quam mollis. Quisque consectetur sollicitudin ligula vel aliquam. Praesent pharetra tellus eget nunc viverra egestas. Donec maximus velit sed orci tincidunt fringilla. Sed ornare lobortis dui, id tincidunt nulla feugiat elementum. Praesent rutrum orci eget aliquam porta. Aliquam ac nibh vulputate lorem congue posuere. Aenean ullamcorper facilisis velit, at egestas ante elementum in. Suspendisse at lacus erat. Nullam tempor venenatis nisi, vitae posuere arcu blandit at. Suspendisse potenti. Aenean gravida, velit a dapibus congue, nunc sapien sollicitudin lorem, at suscipit leo arcu a velit. Proin libero ligula, porttitor sollicitudin tincidunt ut, convallis vitae magna. Vestibulum eros massa, mollis eu sodales eu, posuere vitae massa. Aenean gravida auctor posuere.
    </p>
    <Button onClick={handleClick} primary>Open Modal</Button>
    {showModal && modal }
 </div>
)}

export default ModalPage;