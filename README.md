# ProyectoPVLI-PabloAron-
PVLI-UCM version of the NES game Gradius. We will take the original mechcanics and we will create our own game. 
We wanto to keep the original gameplay adding new features like new shooting modes and enemyes with new behaviours and apareace.
It will be one level game with a end stage , in wich you will have to face a final boss, different from the bosses of the original game.

Project Gradius:
A single player experience that will make you
revive the original one, but adjusting the level 
for nowadays casual players.
Almost the same experience , but not particular 
for hardcore gamers.
We hope you will enjoy it.


Game design document(Spanish version)



Gdiameter:

¿De dónde nace la idea?

La razón por la que nos embarcamos en este proyecto no es otra que la resolución de la asignatura Programación de videojuegos en lenguajes interpretados del Grado en desarrollo de Videojuegos.
Se nos pidió que programásemos un juego basado en los clásicos para el museo de videojuegos de la FDI, manteniendo su esencia pero dándole nuestra propia perspectiva y ajustándola a nuestras necesidades, capacidades y requerimientos.
En nuestro caso y ante semejante oportunidad nos decidimos a desarrollar un heredero del juego de NES Gradius.

Así nace Gdiameter, un juego que mantendrá las bases del juego original y a partir de las cuales crearemos algo nuevo, similar al anterior, pero con nuestro toque personal.
De la misma manera haremos modificaciones que harán el juego más accesible al jugador medio de hoy en día.


Mecanismos y jugabilidad:

Las mecánicas y mecanismos básicos se mantendrán fieles al original:
Manejamos una nave que se puede desplazar a lo ancho y alto de la pantalla con las teclas de dirección.
Independientemente del movimiento del avatar el nivel avanzará, de manera que irá apareciendo el nivel por la parte derecha de la pantalla al mismo ritmo que desaparecerá por la parte izquieda. De la misma manera se irán generando los enemigos y proyectiles que podremos destruir en el caso de los primeros o esquivar, deshabilitándose una vez abandonen la pantalla por la derecha.

Los proyectiles enemigos nos matan, de la misma manera que si impactamos con algún obstáculo o nave enemiga.
En nuestro caso y como adaptación de la dificultad programaremos que la colisión con los proyectiles no implique una muerte instantánea, dotando a los jugadores de una vitalidad y que nos permitirá aguantar varios impactos. No será el caso de colisionar con obstáculos o enemigos, que sí que conllevarán la muerte directa.

En cuanto al sistema de vidas será de la siguiente manera:
El jugador poseerá una barra de vida que le permitirá aguantar X impactos antes de morir. Así mismo el jugador poseerá un número de vidas que le permitirán renacer. Cada vez que renacemos volvemos al comienzo del nivel y tendremos una penalización en la puntuación
Al agotar las vidas (3 muertes) la partida termina. A pesar de perder se nos indicará la puntuación obtenida con la correspondiente penalización por muertes.



En cuanto al nivel:


El nivelado es en scroll lateral, cada nave enemiga derribada nos dará puntos.
El nivel termina con un enfrentamiento contra un jefe final.
Los enemigos tendrán un comportamiento similar a los del juego original (primeras fases), aunque en este caso rediseñaremos algunos. 
Enemigos que aguantan más de un proyectil, enemigos que permanecen en pantalla hasta que los destruimos, enemigos que no pueden ser destruidos y que el jugador se verá obligado a esquivar, enemigos especiales que sueltan power-ups …

Así mismo, durante el gameplay aparecerán en pantalla habilidades bonificación para nuestro jugador, que repercutirán en su cantidad de salud, modo de disparo y escudo temporal o caduco por impacto.

Power ups (Pendiente de revisión): 

Mantendremos los originales y añadiremos algunos como el escudo caduco mencionado anteriormente y los recuperadores de salud.
Así mismo, incluiremos algunos nuevos modos de disparo:
Laser continuo (no será muy dañino pero su cadencia será máxima), onda de choque (se propaga en forma de aro con centro en el jugador, no tendrá mucho daño, pero alcanzará a todos los enemigos en pantalla).
Se lanza y explota solo en caso de colisionar con los enemigos (muy dañina y genera una pequeña onda expansiva al colisionar)
La mayoría de power ups serán limitados en tiempo, salvo excepciones: 
Mejoras permanentes en el disparo: Se aumenta la cadencia de tiro.
Mejoras permanentes velocidad de movimiento : La velocidad de movimiento es mayor.
Bombas: 10 bombas que podrán ser disparadas con un botón de habilidad especial.
Onda expansiva: Tres explosiones que podrán ser disparadas con un botón de habilidad especial.

Boss final:

Al superar todos los obstáculos y desafíos del nivel se llega a la fase final en el que la pantalla deja de avanzar y en la que debemos enfrentarnos al jefe del nivel. Este aparecerá en la parte derecha de la pantalla y tendremos que eliminarlo reduciendo su barra de vida a 0. Consiste en ir debilitando al enemigo al mismo tiempo que esquivamos sus proyectiles. Cada cierto tiempo aparecerán power ups en pantalla de manera temporal y que nos ayudarán a derrotar al boss.


Apartado artístico:

El apartado artístico será tomado de páginas con contenido sin derechos de autor.
Tanto el apartado visual como sonoro serán tomados a conciencia y buscando que concuerden y funcionen, buscando la armonía y que en ningún momento desentone con el contenido del juego, sus mecánicas y su origen.

