<h2>1. Velocity Potential Function</h2>
<p>
It is defined as a scalar function of space and time such that its negative derivative with respect to any direction gives the fluid velocity in that direction. It is defined by &Phi;(Phi). Mathematically, the velocity, Potential is defined as &Phi; = f(x,y,z) for steady flow such that
</p>

$$
   u = -\frac{\partial\phi}{∂x},\ \ 
   v = -\frac{\partial\phi}{∂y}, \ \
   w = -\frac{\partial\phi}{∂z} \quad \quad \quad ...equ(1)
$$

<p>where u, v and w are the components of velocity in x, y and z directions respectively.</p> 

<p>The velocity components in cylindrical polar co-ordinates in terms of velocity potential function are given by</p>

$$
   u_r = \frac{\partial\phi}{∂r}, \ \ u_{\theta} = \frac{1}{r} \frac{∂ϕ}{∂\theta} \quad \quad \quad ...equ(1.1) 
$$

<p>
   where, <br>
   u<sub>r</sub> = velocity component in radial direction (i.e., in r direction) <br>
   u<sub>&theta;</sub> = velocity component in tangential direction (i.e., in &theta; direction)
</p>

<p>
The continuity equation for an incompressible steady flow is
</p>

$$\frac{∂u}{∂x} + \frac{∂v}{∂y} + \frac{∂w}{∂z} = 0.$$

<p>Substituting the values of u, w and w from equation (1), we get</p>

$$\frac{\partial}{∂x}\left(-\frac{∂\phi}{∂x}\right) + \frac{\partial}{∂y}\left(-\frac{∂\phi}{∂y}\right) + \frac{\partial}{∂z}\left(-\frac{∂\phi}{∂z}\right) = 0 $$

$$ \frac{\partial^2 \phi}{∂x^2} + \frac{\partial^2 \phi}{∂y^2} + \frac{\partial^2 \phi}{∂z^2} = 0 \quad \quad \quad ...equ(2) $$

<p>Equation (2) is a Laplace equation.</p>

<p>For two-dimension case, equation (2) reduces to</p>

$$\frac{\partial^2 \phi}{∂x^2} + \frac{\partial^2 \phi}{∂y^2} = 0 \quad \quad \quad ...equ(3) $$

<p>If any value of &Phi; that satisfies the Laplace equation, will correspond to some case of fluid flow.</p>

<p><strong>Properties of the Potential Function.</strong> The rotational components* are given by</p>

$$\omega_z = \frac{1}{2}\left(\frac{∂v}{∂x} - \frac{∂ u}{∂ y}\right)$$
$$\omega_y = \frac{1}{2}\left(\frac{∂u}{∂z} - \frac{∂w}{∂x}\right)$$
$$\omega_x = \frac{1}{2}\left(\frac{∂w}{∂y} - \frac{∂v}{∂z}\right)$$

<p>Substituting the values, of u, v and w from equation (1) in the above rotational components, we get</p>

$$\omega_z = \frac{1}{2}\left[\frac{\partial}{∂x}\left(-\frac{∂ϕ}{∂y}\right)-\frac{\partial}{∂y}\left(-\frac{∂\phi}{∂x}\right)\right] = \frac{1}{2}\left[-\frac{∂^2\phi}{∂x∂y} + \frac{∂^2\phi}{∂y∂x}\right]$$

$$\omega_y = \frac{1}{2}\left[\frac{\partial}{∂z}\left(-\frac{∂ϕ}{∂x}\right)-\frac{\partial}{∂x}\left(-\frac{∂\phi}{∂z}\right)\right] = \frac{1}{2}\left[-\frac{∂^2\phi}{∂z∂x} + \frac{∂^2\phi}{∂x∂z}\right]$$

$$\omega_x = \frac{1}{2}\left[\frac{\partial}{∂y}\left(-\frac{∂ϕ}{∂z}\right)-\frac{\partial}{∂z}\left(-\frac{∂\phi}{∂y}\right)\right] = \frac{1}{2}\left[-\frac{∂^2\phi}{∂y∂z} + \frac{∂^2\phi}{∂z∂y}\right]$$

<p>If &Phi; is a continuous function, then</p>

$$\frac{∂^2\phi}{∂x∂y} = \frac{∂^2\phi}{∂y∂x}; \ \frac{∂^2\phi}{∂z∂x} = \frac{∂^2\phi}{∂x∂z}; \ etc.$$

$$∴  \omega_z = \omega_y = \omega_x = 0$$

<ol type="1">
When rotational components are zero, the flow is called irrotational. Hence the properties of the potential function are : 
   <li> If velocity potential (&Phi;) exists, the flow should be irrotational.</li>
   <li>If velocity potential (&Phi;) satisfies the Laplace equation, it represents the possible steady incompressible irrotational flow.</li>
</ol>

<h2>2. Stream Function</h2>
<p>It is defined as the scalar function of space and time, such that its partial derivative with respect to any direction gives the velocity component at right angles to that direction. It is denoted by &Psi; (Psi) and defined only for two-dimensional flow. Mathematically, for steady flow it is defined as &Psi; = f (x, y) such that</p>

$$
\frac{∂\psi}{∂x} = v, \ \ \frac{∂\psi}{∂y} = -u \quad \quad \quad ...equ(4)
$$

<p>The velocity components in cylindrical polar co-ordinates in terms of stream function are given as</p>

$$
u_r = \frac{1}{r}\frac{∂\psi}{∂\theta}\ \ and\ \ u_{\theta} = - \frac{∂\psi}{∂r} \quad \quad \quad ...equ(4.1)
$$

<p>where u<sub>r</sub>= radial velocity and u<sub>&theta;</sub> = tangential velocity</p>

<p>The continuity equation for two-dimensional flow is</p>

$$ \frac{∂u}{∂x} + \frac{∂v}{∂y} = 0 $$

<p>Substituting the values of u and v from equation (4), we get</p>

$$\frac{\partial}{∂x}\left(-\frac{\partial\psi}{∂y}\right) + \frac{\partial}{∂y}\left(\frac{\partial\psi}{∂x}\right) = 0 $$

$$-\frac{∂^2\psi}{∂x∂y} + \frac{∂^2\psi}{∂x∂y} = 0$$

<p>Hence existence of &Psi; means a possible case of fluid flow. The flow may be rotational or irrotational.</p>

<p>The rotational component &omega;<sub>z</sub> is given by</p>

$$\omega_z = \frac{1}{2}\left(\frac{∂v}{∂x} - \frac{∂u}{∂y}\right)$$

<p>Substituting the values of u and v from equation (4) in the above rotational component, we get</p>

$$\omega_z = \frac{1}{2}\left[\frac{\partial}{∂x}\left(\frac{\partial\psi}{∂x}\right) - \frac{\partial}{∂y}\left(\frac{\partial\psi}{∂y}\right)\right] = \frac{1}{2}\left[\frac{∂^2\psi}{∂x^2} + \frac{∂^2ψ}{∂y^2}\right]$$

<p>For irrotational flow, &omega;<sub>z</sub> = 0. Hence above equation becomes as</p>

$$\frac{\partial^2\psi}{∂x^2} + \frac{\partial\psi}{∂y^2} = 0$$

<p>which is Laplace equation for &Psi;.</p>

<ol type="1">
The properties of stream function (&Psi;) are :
<li>
If stream function (&Psi;) exists, it is a possible case of fluid flow which may be rotational or irrotational.
</li>
<li>If stream function (&Psi;) satisfies the Laplace equation, it is a possible case of an irrotational flow.</li>
</ol>

<h2>3. Equipotential Line</h2>
<p>A line along which the velocity potential &Phi; is constant, is called equipotential line.</p>

$$ For\ equipotential\ line \quad \quad \quad \quad ϕ = constant $$
$$ ∴ \quad \quad \quad  dψ = 0 $$
$$ But\ \quad \quad ϕ = f(x,y)\ for\ steady\ flow $$ 
$$ ∴ \quad \quad \quad dϕ = \frac{∂\phi}{∂x}dx + \frac{∂\phi}{∂y}dy $$
$$ = -udx - vdy \quad \quad \quad \quad \quad \left\{∵ \frac{∂\phi }{∂x} = -u, \ \frac{\partial\phi}{∂x} = -v \right\}  $$
$$ = -(udx + vdy) $$

<br>

$$ For\ equipotential\ line, \quad \quad \quad  dϕ = 0$$
$$ or \quad \quad \quad -(udx + vdy) = 0\ or\ udx + vdy = 0  $$
$$ ∴ \frac{dy}{dx} = -\frac{u}{v} \quad \quad\quad ...equ(5) $$
$$ But \quad \quad \quad \frac{dy}{dx} = slope\ of\ equipotential\ line. $$

<h2>4. Line of Constant Stream Function</h2>

$$ ψ = Constant $$
$$ ∴ \quad \quad \quad dψ = 0 $$
$$ But \quad \quad \quad dψ = \frac{∂\psi}{∂x}dx + \frac{\partial\psi}{∂y}dy = vdx - udy \quad \quad \quad \left\{∵ \frac{\partial\psi}{∂x} = v;\ \frac{\partial\psi}{∂y} = -u\right\} $$

<p>For a line of constant stream function</p>

$$ = dψ = 0\ or\ vdx - udy = 0 $$
$$ or \qquad \frac{dy}{dx} = \frac{v}{u} \qquad \qquad ...equ(6) $$
$$ But\ \frac{dy}{dx}\ is\ slope\ of\ stream\ line. $$

<br>

<p>From equations (5) and (6) it is clear that the product of the slope of the equipotential line and the slope of the stream line at the point of intersection is equal to -1. Thus the equipotential lines are othogonal to the stream lines at all points of intersection.</p>

<h2>5. Flow Net </h2>
<p>A grid obtained by drawing a series of equipotential lines and stream lines is called a flow net. The flow net is an important tool in analysing two-dimensional irrotational flow problems.</p>

<h2>6. Relation between Stream Function and Velocity Potential Function</h2>
<p>From equation (1),</p>

$$
we\ have \qquad \qquad u = -\frac{∂\phi}{∂x}\ \ and\ v = \frac{\partial \phi}{∂y}  
$$

<p>From equation (4), we have</p>

$$ u = -\frac{∂\psi}{∂y}\ and\ v = \frac{\partial\psi}{∂x}$$

<p>Thus, we have</p>

$$ u = -\frac{\partial\phi}{∂x} = - \frac{\partial\psi}{∂y} $$
$$ v = -\frac{\partial\phi}{∂y} = \frac{\partial\psi}{∂x} $$

<p>Hence,</p>

$$\frac{\partial\phi}{∂x} = \frac{\partial\psi}{∂y}\ and\ \frac{\partial\phi}{∂y} = -\frac{\partial\psi}{∂x} \qquad \qquad ...equ(7)$$

<h2>7. Angular Deformation or Shear Deformation</h2>
<p>It is defined as the average change in the angle contained by two adjacent sides. Let &#8710;&theta;<sub>1</sub>, and &#8710;&theta;<sub>2</sub>, is the change in angle between two adjacent sides of a fluid element, then angular deformation or shear strain rate</p>

$$
 = \frac{1}{2}[\triangle\theta_1 + \triangle\theta_2]
$$

$$
Now \qquad \qquad \qquad \triangle\theta_1 = \frac{∂v}{∂x} × \frac{\triangle x}{\triangle x} = \frac{∂v}{∂x}\ \ and\ \ \triangle\theta_2 = \frac{∂u}{∂y} × \frac{\triangle y}{\triangle y} = \frac{∂u}{∂y} 
$$

$$
∴ \qquad Angular\ deformation\ = \frac{1}{2}[\triangle\theta_1 + \triangle\theta_2]
$$

$$
or \qquad Shear\ strain\ rate = \frac{1}{2}\left[\frac{\partial v}{∂ x} + \frac{\partial u}{∂ y} \right] \qquad \qquad \qquad ...equ(8)
$$

<h2>8. Rotation</h2>
<p>It is defined as the movement of a fluid element in such a way that both of its axes (horizontal as well as vertical) rotate in the same direction.</p>

$$
It\ is\ equal\ to\ \frac{1}{2} \left(\frac{\partial v}{∂x} - \frac{∂ u}{∂ y} \right)\ for\ a\ two\ dimensional\ element\ x-y\ plane.
$$

<br>
<p>The rotational components are</p>

$$
\omega_z = \frac{1}{2}\left(\frac{\partial v}{∂x} - \frac{\partial u}{∂y}\right),\ 
\omega_x = \frac{1}{2}\left(\frac{\partial w}{∂y} - \frac{\partial v}{∂z}\right), \
\omega_y = \frac{1}{2}\left(\frac{\partial u}{∂z} - \frac{\partial w}{∂x}\right) \qquad \qquad ...equ(9)
$$