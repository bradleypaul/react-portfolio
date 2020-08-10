import React from 'react';
import coverImage from "../../assets/cover/profile.jpg";

function About() {
  return (
    <section className="my-5">
      
        <h1 id="about">Who am I?</h1>
        <section style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Bibendum enim facilisis gravida neque convallis a cras. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Eget est lorem ipsum dolor sit amet consectetur. Non curabitur gravida arcu ac tortor dignissim. Euismod in pellentesque massa placerat duis ultricies. Tincidunt augue interdum velit euismod. Tristique et egestas quis ipsum suspendisse ultrices. Eget sit amet tellus cras. Suspendisse sed nisi lacus sed viverra tellus. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Aliquam purus sit amet luctus. Amet massa vitae tortor condimentum lacinia quis vel. Convallis aenean et tortor at risus viverra adipiscing at in.

Amet consectetur adipiscing elit duis tristique. Malesuada fames ac turpis egestas sed tempus urna. Arcu non sodales neque sodales ut etiam sit amet nisl. Nulla pellentesque dignissim enim sit amet venenatis. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Ornare quam viverra orci sagittis eu. Nullam non nisi est sit amet facilisis magna. Cras adipiscing enim eu turpis egestas pretium aenean. Ultricies mi quis hendrerit dolor magna. Aliquet enim tortor at auctor urna. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Tempus quam pellentesque nec nam aliquam sem et tortor.

Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Libero id faucibus nisl tincidunt eget nullam non nisi. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Faucibus turpis in eu mi bibendum. Viverra vitae congue eu consequat ac felis donec et odio. Feugiat sed lectus vestibulum mattis ullamcorper velit. Iaculis urna id volutpat lacus laoreet. Aliquam sem fringilla ut morbi tincidunt augue interdum. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Rhoncus aenean vel elit scelerisque mauris. Eget aliquet nibh praesent tristique magna. Sagittis id consectetur purus ut faucibus pulvinar elementum.

Ut eu sem integer vitae justo eget magna fermentum. Maecenas pharetra convallis posuere morbi leo urna molestie at. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Aliquet lectus proin nibh nisl condimentum id. Velit euismod in pellentesque massa placerat. Neque viverra justo nec ultrices dui sapien eget mi. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Cras tincidunt lobortis feugiat vivamus. Facilisi cras fermentum odio eu feugiat pretium nibh. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Vivamus at augue eget arcu. Amet dictum sit amet justo donec enim. Auctor urna nunc id cursus metus aliquam eleifend.

Ipsum dolor sit amet consectetur. Placerat orci nulla pellentesque dignissim. Cum sociis natoque penatibus et. Nec ultrices dui sapien eget mi proin sed libero. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Sed risus pretium quam vulputate dignissim suspendisse in est. Sem viverra aliquet eget sit amet tellus cras adipiscing. In dictum non consectetur a. Pretium viverra suspendisse potenti nullam ac. Sed velit dignissim sodales ut. Quis enim lobortis scelerisque fermentum. Amet mauris commodo quis imperdiet massa. Condimentum mattis pellentesque id nibh tortor id aliquet.</div>
        <img src={coverImage} className="my-2 " style={{ minWidth: "50%", height: 'auto', objectFit:'scale-down' }} alt="cover" />
      </section>

    </section>
  )
}

export default About;
