
const Home = {
    template: `
    <main>
        <article>
            <h1 class="text-center m-4">What is this website?</h1>
			<!-- la classe img-fluid rende le immagini responsive -->
           	<figure class="text-center"> 
				<img src="../assets/images/emscripten_logo.png" class="figure-img img-fluid " style="width: 500px;" alt="Emscripten Logo"/>
				<figcaption class="figure-caption">Emscripten, the compiler used to build the example of this website</figcaption>
           	</figure> 
            <p class="text-center m-4 p-4 bg-body-secondary">
                This website shows a technology able to convert C/C++ (and much more too!) programs into WebAssembly application. This allows us to run such programs on a Web browser.<br> WebAssembly offers a better performance and a much more optimized code, being very useful to calculation-focused applications (such as games and mathematical-oriented programs).
            </p>
		</article>
    </main>
    `,
    mounted() {
        // test per vedere se la pagina viene montata
        console.log("Home mounted")
    }
};

const AboutES = {
    template: `
    <main>
        <article>
            <h1 class="text-center m-4">What is Emscripten?</h1>
            <p class="text-center m-4 p-4 bg-body-secondary">
                Emscripten is a compiler that converts C and C++ code into WebAssembly (WASM) or JavaScript, allowing developers to run native code in web browsers or Node.js environments. Here's a brief history of Emscripten and an overview of what it does.
            </p>
            <h2 class="text-center m-4 text-light-emphasis">Early days (2010-2011)</h2>
            <p class="text-center m-4 p-4 bg-body-secondary">
                Emscripten was created by Alon Zakai, a Mozilla engineer, in 2010. At the time, Zakai was working on a project to port the Quake III Arena game engine to run in a web browser. He realized that compiling C code to JavaScript would be a more efficient approach than rewriting the entire engine in JavaScript. Zakai's initial implementation, called "Emscripten," was a simple C-to-JavaScript compiler.
            </p>
			
			<figure class="text-center">
				<img src="../assets/images/quake3.jpeg" class="figure-img img-fluid" style="width: 500px;" alt="Quake 3 Arena screenshot"/>
				<figcaption class="figure-caption">A screenshot of id Software's game, Quake 3 Arena</figcaption>
			</figure>
            
			<h2 class="text-center m-4 text-light-emphasis">Development and growth (2011-2013)</h2>
            <p class="text-center m-4 p-4 bg-body-secondary">
                In 2011, Emscripten was open-sourced and gained popularity as a tool for porting native games and applications to the web. The compiler was initially based on the LLVM compiler infrastructure project, which provided a robust framework for building compilers. Emscripten's development accelerated, and it began to support more C and C++ features, including dynamic linking, exceptions, and RTTI (Run-Time Type Information).
            </p>
            <h2 class="text-center m-4 text-light-emphasis">WebAssembly (2015)</h2>
            <p class="text-center m-4 p-4 bg-body-secondary">
                In 2015, the WebAssembly (WASM) project was announced, aiming to provide a binary instruction format for the web. Emscripten was one of the first compilers to support WASM, and it became a key player in the WASM ecosystem. With WASM, Emscripten could generate more efficient and portable code, which could be executed by web browsers and Node.js environments without the need for JavaScript.
            </p>

            <figure class="text-center">
				<img src="../assets/images/ut99.png" class="figure-img img-fluid" style="width: 500px;" alt="UT99 ported to Emscripten"/>
				<figcaption class="figure-caption">Classic game Unreal Tournament, running on a web browser thanks to Emscripten</figcaption>
			</figure>

            <h2 class="text-center m-4 text-light-emphasis">Modern Emscripten (2016-present)</h2>
            <div class="text-center m-4 p-4 bg-body-secondary">
                Today, Emscripten is a mature compiler that supports a wide range of C and C++ features, including:
               	<div class="d-flex flex-column mt-3 justify-content-center"> 
				<ul class="list-group gap-1 m-2">
                   	<li id="listTitle" class="list-group-item">Web port</li> 
					<li id="listContent" class="list-group-item">Emscripten can compile C and C++ code to WASM, which is executed by web browsers and Node.js environments.</li>
				</ul>
				<ul class="list-group gap-1 m-2">
                    <li id="listTitle" class="list-group-item">JavaScript generation</li>
                    <li id="listContent" class="list-group-item">Emscripten can also compile C and C++ code to JavaScript, which is useful for older browsers or environments that don't support WASM.</li>
				</ul>
                <ul class="list-group gap-1 m-2"> 
					<li id="listTitle" class="list-group-item">Multi-threading support</li>
					<li id="listContent" class="list-group-item">Emscripten supports multi-threading through Web Workers, allowing developers to take advantage of multiple CPU cores.</li>
                </ul>
				<ul class="list-group gap-1 m-2">
					<li id="listTitle" class="list-group-item">Dynamic linking</li>
					<li id="listContent" class="list-group-item">Emscripten supports dynamic linking, enabling the creation of shared libraries and plugins.</li>
				</ul>
				<ul class="list-group gap-1 m-2">
                    <li id="listTitle" class="list-group-item">Emulation of native APIs</li>
                    <li id="listContent" class="list-group-item">Emscripten provides emulations of native APIs, such as OpenGL, OpenAL, and SDL, allowing developers to port native applications with minimal modifications.</li>
                </ul>
				</div>
            </div>

           	<figure class="text-center"> 
				<img src="../assets/images/ClangWasm.png" class="figure-img img-fluid" style="width: 500px;" alt="Emscripten Toolchain"/>
            	<figcaption class="figure-caption">An example showing how simple the Emscripten toolchain could be</figcaption>
       		</figure> 

            <h2 class="text-center m-4 text-light-emphasis">Emscripten's Uses</h2>
            <div class="text-center m-4 p-4 bg-body-secondary">
                Emscripten is widely used in various industries, including:
				<div class="d-flex flex-column mt-3 justify-content-center">
                <ul class="list-group gap-1 m-2 ">
					<li id="listTitle" class="list-group-item">Gaming</li>
                    <li id="listContent" class="list-group-item">Emscripten has been used to port popular games like Quake III Arena, Doom, and Unreal Tournament to the web.</li>
				</ul>
				<ul class="list-group gap-1 m-2 ">
                    <li id="listTitle" class="list-group-item">Scientific computing</li>
                    <li id="listContent" class="list-group-item">Emscripten is used in scientific computing to run complex simulations and data analysis in web browsers.</li>
                </ul>
				<ul class="list-group gap-1 m-2 ">
					<li id="listTitle" class="list-group-item">Enterprise software</li>
					<li id="listContent" class="list-group-item">Emscripten is used in enterprise software to port native applications to the web, reducing the need for native installations.</li>
                </ul>
				</div>
            </div>
		
            <figure class="text-center">
			<div class="d-flex flex-row gap-2 justify-content-center align-items-end flex-wrap">
				<img src="../assets/images/d3wasm.jpg" class="figure-img img-fluid" style="width: 500px;" alt="Doom 3 ported to WASM"/>
            	<img src="../assets/images/screen1.jpg" class="figure-img img-fluid" style="width: 500px;" alt="Emscripten app screenshot"/>
			</div>
            	<figcaption class="figure-caption text-center">id Tech 4 and Unreal Engine 3 ported to Web, thanks to Emscripten</figcaption>
			</figure>

        </article>
    </main>
    `,
    mounted() {
        console.log("About ES mounted")
    }
};

const BasicCalc = {
    data() {
        return {
            result: "",
            num1: "",
            num2: ""
        }
    },
    template: `
    <main>
        <h1 class="text-center m-4">Calculator</h1>
        <h2 class="text-center m-4 p-2">
           A basic calculator
        </h2>
        <div class="d-flex flex-row mb-4 text-center justify-content-center gap-3">
           	<div class="d-flex flex-column">	
				<label for="Num1" class="form-label text-center">Number 1</label>  
				<input id="Num1" v-model="num1" placeholder="Number 1" type="number" class="form-control p-2">
			</div>
           	<div class="d-flex flex-column">	
				<label for="Num2" class="form-label text-center">Number 2</label>  
            	<input id="Num2" v-model="num2" placeholder="Number 2" type="number" class="form-control p-2">
			</div>
        </div>
        
		<div class="d-flex flex-row mb-4 text-center justify-content-center gap-3">
            <button class="btn btn-primary p-2" v-on:click="add">Add</button>
            <button class="btn btn-primary p-2" v-on:click="subtract">Subtract</button>
            <button class="btn btn-primary p-2" v-on:click="multiply">Multiply</button>
            <button class="btn btn-primary p-2" v-on:click="divide">Divide</button>
        </div>
   		
		<div class="d-flex m-4 flex-row justify-content-center">
			<div class="d-flex flex-column">	
				<label for="Res" class="form-label text-center">Result</label>
				<input id="Res" v-model="result" placeholder="Result" type="number" class="form-control p-2">
			</div>
		</div>

		<hr class="hr mt-4">

                <article class="justify-content-center m-4 p-4 bg-body-secondary">
       		<p class="text-start">
			This is a simple calculator which uses WebAssembly to work.
			Its core is written in C, and after being compiled to WebAssembly
			using Emscripten SDK it can be interfaced to a web-page (thanks to
			a JavaScript wrapper, generated by Emscripten during compiling process).
			</p>

			<p class="text-center">
			Here is the C source code:
			</p>

			<div class="justify-align-center ">
<pre class="text-start bg-white p-4 m-2">
#include &lt;emscripten.h&gt;

int EMSCRIPTEN_KEEPALIVE add(int a, int b) {

    return a + b;
}

int EMSCRIPTEN_KEEPALIVE subtract(int a, int b) {

    return a - b;
}

int EMSCRIPTEN_KEEPALIVE multiply(int a, int b) {

    return a * b;
}

float EMSCRIPTEN_KEEPALIVE divide(int a, int b) {

    return a / (float) b;
}
</pre>
			</div>

			<p class="text-start">
				We have a function for each arithmetic operation, which accept two integer
				inputs and returns an integer output (except for division, because the
				result could be a number with decimal point.
				The EMSCRIPTEN_KEEPALIVE macro, defined in the emscripten header file,
				keeps the compiler from removing functions that are not currently used.
			</p>
			<p class="text-start">
				To compile the program and get a WebAssembly script, we need to use Emscripten
				SDK. The SDK compile command is very similar to gcc:
            </p>
				<div class="justify-align-center">
<pre class="text-center bg-white p-4 m-2">
emcc calc.c -o calc.js
</pre>
				</div>

<p class="text-start">
			What we obtain as output is our final application, both in WASM and JS format.
			We can now "fetch" the WASM file from our webpage, instantiate our WASM application and interact with it, thus
			calling its functions (such as in our calculator example). 
</p>

<div class="justify-align-center">
<pre class="text-start bg-white p-4 m-2">
// Let's take as an example the add function from our C code

// we fetch our WASM file
fetch("/assets/scripts/calc.wasm") 

// we save fetch output into a buffer, and we instantiate our WASM application
.then(response => response.arrayBuffer())
.then(bytes => WebAssembly.instantiate(bytes)) .then(results => {
    
    // finally we call our C function and save its return value into "result" variable
    const { add } = results.instance.exports; 
    this.result = (add(this.num1, this.num2).toPrecision(6)); 
});
</pre>
</div>

</article>
		
		<figure class="text-center"> 
			<img src="../assets/images/EmscriptenToolchain.png" class="figure-img img-fluid " style="width: 500px;" alt="Emscripten Toolchain"/>
			<figcaption class="figure-caption">Diagram showing how the Emscripten toolchain works</figcaption>
		</figure> 
	
	</main>
    `,
    mounted() {
        console.log("Calculator mounted");
    },
    methods: {
        add() {
            fetch("/assets/scripts/calc.wasm")
            .then(response => response.arrayBuffer())
            .then(bytes => WebAssembly.instantiate(bytes))
            .then(results => {
                const { add } = results.instance.exports;
                this.result = (add(this.num1, this.num2).toPrecision(6));
            });
        },
        subtract() {
            fetch("/assets/scripts/calc.wasm")
            .then(response => response.arrayBuffer())
            .then(bytes => WebAssembly.instantiate(bytes))
            .then(results => {
                const { subtract } = results.instance.exports;
                this.result = (subtract(this.num1, this.num2).toPrecision(6));
            });
        },
        multiply() {
            fetch("/assets/scripts/calc.wasm")
            .then(response => response.arrayBuffer())
            .then(bytes => WebAssembly.instantiate(bytes))
            .then(results => {
                const { multiply } = results.instance.exports;
                this.result = (multiply(this.num1, this.num2).toPrecision(6));
            });
        },
        divide() {
            fetch("/assets/scripts/calc.wasm")
            .then(response => response.arrayBuffer())
            .then(bytes => WebAssembly.instantiate(bytes))
            .then(results => {
                const { divide } = results.instance.exports;
                this.result = (divide(this.num1, this.num2).toPrecision(6));
            });
        }
    }
};

const DataManager = {
    data() {
        return {
            apps: axios.get("./assets/data.json").then(response => {
                
                this.apps = response.data;
            }),
           	newApplication: "",
			newType: "",
			selected: 0,
            mode: 'edit',
            isShown: true,
            isItemSortAsc: false,
            isTypeSortAsc: false,
        };
    },
    template: `
        <main>
            <h1 class="text-center m-4">Data Manager</h1>
		
			<div class="d-flex flex-row gap-2 justify-content-center">
			<div class="d-flex flex-column">
			<label for="selectMode" class="form-label text-center">Mode</label>
            <select id="selectMode" class="form-select mb-2" v-model="mode">
                    <option value='edit'>
                        Edit
                    </option>
                     <option value='add'>
                        Add
                    </option>
            </select>
			</div>
			</div>

            <div class="d-flex flex-row gap-2 justify-content-center ">
			
				<div class="d-flex flex-column text-center ">	
				<label for="selectIndex" v-show="mode === 'edit' && isShown === true" class="form-label">Index</label>
                <select id="selectIndex" v-show="mode === 'edit' && isShown === true" class="form-select" v-model="selected">
                    <option v-for="(app, index) in apps" v-bind:value="index">
                        {{ index + 1 }}
                    </option>
                </select>
				</div>
				
				<div class="d-flex flex-column text-center ">
				<label for="insertApplicationEdit" v-show="mode === 'edit' && isShown === true" class="form-label">Application</label>	
                <input id="insertApplicationEdit" v-show="mode === 'edit' && isShown === true" v-model="apps[selected].application" type="text" placeholder="Application" class="form-control">
				</div>

				<div class="d-flex flex-column text-center ">	
				<label for="selectTypeEdit" v-show="mode === 'edit' && isShown === true" class="form-label">Type</label>	
                <select id="selectTypeEdit" v-show="mode === 'edit' && isShown === true" class="form-select" v-model="apps[selected].type">
                    <option value="Game">Game</option>
                    <option value="Other">Other</option>
                </select>
				</div>	

				<div class="d-flex flex-column text-center " >	
				<label for="insertApplicationAdd" v-show="mode === 'add'" class="form-label">Application</label>	
				<input id="insertApplicationAdd" v-show="mode === 'add'" type="text" placeholder="Application (Add)" v-model="newApplication" class="form-control">
				</div>	

				<div class="d-flex flex-column text-center " >	
				<label for="selectTypeAdd" v-show="mode === 'add'" class="form-label">Type</label>	
                <select id="selectTypeAdd" v-show="mode === 'add'" class="form-select" v-model="newType">
                    <option value="Game">Game</option>
                    <option value="Other">Other</option>
                </select>
				</div>

            </div>
            
            <div class="d-flex flex-row gap-2 justify-content-center mt-3">
                <button class="btn btn-danger" v-show="mode === 'edit' && isShown === true" v-on:click="deleteItem">Delete</button>
                <button class="btn btn-success" v-show="mode === 'add'" v-on:click="addItem">Add</button>
            </div>

            <table class="table table-striped mt-4">
                <thead>
                    <tr>
                        <th scope="col" class="text-center">#</th>
                        <th scope="col" id="appColumn" class="text-center" @click="sortItemsByApp">Application</th>
                        <th scope="col" id="typeColumn" class="text-center" @click="sortItemsByType">Type</th>
                    </tr>
                </thead>
                <tbody v-show="isShown === true">
                    <tr v-for="(app, index) in apps">
						<td class="text-center">{{ index + 1 }}</td>
                        <td class="text-center">{{ app.application }}</td>
                        <td class="text-center">{{ app.type }}</td>
                    </tr>
                </tbody>
            </table>

        </main>
    `,
    methods: {
        deleteItem() {
            if (this.mode === 'edit') {
                console.log("Trying to delete...");
	            console.log(this.isShown);

                if (this.apps.length > 1) {
                    this.apps.splice(this.selected, 1);
                    console.log(this.apps.length);
                }
                else {
                    this.isShown = false;
                    this.apps[0].application = "";
                    this.apps[0].type = "";
                }
                
                if (this.selected > 0) {
                    this.selected = this.selected - 1;
                    console.log(this.selected);
                    console.log(this.apps.length);
                }

            } else {
                console.log("Non puoi eliminare con add...");
            }
        },
        addItem() {
            if (this.mode === 'add') {
                
                if (this.newApplication != "" && this.newType != 0) {
                    if (this.isShown === true) { 
                        this.apps.push( {application: this.newApplication, type: this.newType} );
                        this.selected = this.apps.length - 1;
                        this.newApplication = "";
                        this.newType = "";
                    }
                    else {
                        this.apps[0].application = this.newApplication;
                        this.apps[0].type = this.newType;
                        this.selected = 0;
                        this.newApplication = "";
                        this.newType = "";
                        this.isShown = true;
                    }
                } else {
                    console.log("Can't add item with empty fields");
                }
            } else {
                console.log("Non puoi aggiungere se non sei in add");
            }
        },
        sortItemsByApp() {
            function sortAsc(a, b) {
                if (a.application < b.application)
                    return -1;
                if (a.application > b.application)
                    return 1;
                
                return 0;
            }

            function sortDisc(a, b) {
                if (a.application > b.application)
                    return -1;
                if (a.application < b.application)
                    return 1;
                
                return 0;
            }

            if (this.isItemSortAsc === true) {
                this.isItemSortAsc = false;
                console.log(this.isItemSortAsc);
                return this.apps.sort(sortDisc); 
            } else {
                this.isItemSortAsc = true;
                console.log(this.isItemSortAsc);
                return this.apps.sort(sortAsc);
            }
        },
        sortItemsByType() {
            function sortAsc(a, b) {
                if (a.type < b.type)
                    return -1;
                if (a.type > b.type)
                    return 1;
                
                return 0;
            }

            function sortDisc(a, b) {
                if (a.type > b.type)
                    return -1;
                if (a.type < b.type)
                    return 1;
                
                return 0;
            }

            if (this.isTypeSortAsc === true) {
                this.isTypeSortAsc = false;
                console.log(this.isTypeSortAsc);
                return this.apps.sort(sortDisc); 
            } else {
                this.isTypeSortAsc = true;
                console.log(this.isTypeSortAsc);
                return this.apps.sort(sortAsc);
            }
        },  
    },
    mounted() {
        console.log(this.mode);
    }
}

const Table = {
    data() {
        return {
            datas: null,
            isItemSortAsc: false,
            isTypeSortAsc: false,
        };
    },
    template: `
        <main>
            <h1 class="text-center m-4">Table</h1>
            <table class="table table-striped mt-4">
                <thead>
                    <tr>
                        <th scope="col" class="text-center">#</th>
                        <th scope="col" id="appColumn" class="text-center" @click="sortItemsByApp">Application</th>
                        <th scope="col" id="typeColumn" class="text-center" @click="sortItemsByType">Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data, index) in datas">
                        <td class="text-center">{{ index + 1 }}</td>
                        <td class="text-center">{{ data.application }}</td>
                        <td class="text-center">{{ data.type }}</td>
                    </tr>
                </tbody>
            </table>
        </main>
    `,
    methods: {
        fetchData() {
            axios.get("./assets/data.json").then(response => {
                this.datas = response.data;
                console.log(this.datas);
            });
        },
        sortItemsByApp() {
            function sortAsc(a, b) {
                if (a.application < b.application)
                    return -1;
                if (a.application > b.application)
                    return 1;
                
                return 0;
            }

            function sortDisc(a, b) {
                if (a.application > b.application)
                    return -1;
                if (a.application < b.application)
                    return 1;
                
                return 0;
            }

            if (this.isItemSortAsc === true) {
                this.isItemSortAsc = false;
                console.log(this.isItemSortAsc);
                return this.datas.sort(sortDisc); 
            } else {
                this.isItemSortAsc = true;
                console.log(this.isItemSortAsc);
                return this.datas.sort(sortAsc);
            }
        },
        sortItemsByType() {
            function sortAsc(a, b) {
                if (a.type < b.type)
                    return -1;
                if (a.type > b.type)
                    return 1;
                
                return 0;
            }

            function sortDisc(a, b) {
                if (a.type > b.type)
                    return -1;
                if (a.type < b.type)
                    return 1;
                
                return 0;
            }

            if (this.isTypeSortAsc === true) {
                this.isTypeSortAsc = false;
                console.log(this.isTypeSortAsc);
                return this.datas.sort(sortDisc); 
            } else {
                this.isTypeSortAsc = true;
                console.log(this.isTypeSortAsc);
                return this.datas.sort(sortAsc);
            }
         },
    
    },
    mounted() {
        this.fetchData();
    }
}

const routes = [
    { path: '/', component: Home },
    { path: '/about_es', component: AboutES },
    { path: '/basic_calc', component: BasicCalc },
    { path: '/data_manager', component: DataManager},
    { path: '/table', component: Table}
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
