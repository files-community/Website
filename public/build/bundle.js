
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function validate_store(store, name) {
        if (store != null && typeof store.subscribe !== 'function') {
            throw new Error(`'${name}' is not a store with a 'subscribe' method`);
        }
    }
    function subscribe(store, ...callbacks) {
        if (store == null) {
            return noop;
        }
        const unsub = store.subscribe(...callbacks);
        return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
    }
    function component_subscribe(component, store, callback) {
        component.$$.on_destroy.push(subscribe(store, callback));
    }
    function create_slot(definition, ctx, $$scope, fn) {
        if (definition) {
            const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
            return definition[0](slot_ctx);
        }
    }
    function get_slot_context(definition, ctx, $$scope, fn) {
        return definition[1] && fn
            ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
            : $$scope.ctx;
    }
    function get_slot_changes(definition, $$scope, dirty, fn) {
        if (definition[2] && fn) {
            const lets = definition[2](fn(dirty));
            if ($$scope.dirty === undefined) {
                return lets;
            }
            if (typeof lets === 'object') {
                const merged = [];
                const len = Math.max($$scope.dirty.length, lets.length);
                for (let i = 0; i < len; i += 1) {
                    merged[i] = $$scope.dirty[i] | lets[i];
                }
                return merged;
            }
            return $$scope.dirty | lets;
        }
        return $$scope.dirty;
    }
    function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
        const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
        if (slot_changes) {
            const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
            slot.p(slot_context, slot_changes);
        }
    }
    function exclude_internal_props(props) {
        const result = {};
        for (const k in props)
            if (k[0] !== '$')
                result[k] = props[k];
        return result;
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function svg_element(name) {
        return document.createElementNS('http://www.w3.org/2000/svg', name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function empty() {
        return text('');
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function toggle_class(element, name, toggle) {
        element.classList[toggle ? 'add' : 'remove'](name);
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error('Function called outside component initialization');
        return current_component;
    }
    function onMount(fn) {
        get_current_component().$$.on_mount.push(fn);
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }

    const globals = (typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : global);
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : options.context || []),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.38.2' }, detail)));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function prop_dev(node, property, value) {
        node[property] = value;
        dispatch_dev('SvelteDOMSetProperty', { node, property, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    const subscriber_queue = [];
    /**
     * Creates a `Readable` store that allows reading by subscription.
     * @param value initial value
     * @param {StartStopNotifier}start start and stop notifications for subscriptions
     */
    function readable(value, start) {
        return {
            subscribe: writable(value, start).subscribe
        };
    }
    /**
     * Create a `Writable` store that allows both updating and reading by subscription.
     * @param {*=}value initial value
     * @param {StartStopNotifier=}start start and stop notifications for subscriptions
     */
    function writable(value, start = noop) {
        let stop;
        const subscribers = [];
        function set(new_value) {
            if (safe_not_equal(value, new_value)) {
                value = new_value;
                if (stop) { // store is ready
                    const run_queue = !subscriber_queue.length;
                    for (let i = 0; i < subscribers.length; i += 1) {
                        const s = subscribers[i];
                        s[1]();
                        subscriber_queue.push(s, value);
                    }
                    if (run_queue) {
                        for (let i = 0; i < subscriber_queue.length; i += 2) {
                            subscriber_queue[i][0](subscriber_queue[i + 1]);
                        }
                        subscriber_queue.length = 0;
                    }
                }
            }
        }
        function update(fn) {
            set(fn(value));
        }
        function subscribe(run, invalidate = noop) {
            const subscriber = [run, invalidate];
            subscribers.push(subscriber);
            if (subscribers.length === 1) {
                stop = start(set) || noop;
            }
            run(value);
            return () => {
                const index = subscribers.indexOf(subscriber);
                if (index !== -1) {
                    subscribers.splice(index, 1);
                }
                if (subscribers.length === 0) {
                    stop();
                    stop = null;
                }
            };
        }
        return { set, update, subscribe };
    }

    const org = readable('files-community');
    const repo = readable('files');
    const storeId = readable('9nghp3dx8hdx');

    /* src\common\Button.svelte generated by Svelte v3.38.2 */

    const file$8 = "src\\common\\Button.svelte";

    // (22:0) {:else}
    function create_else_block_1(ctx) {
    	let a;
    	let current_block_type_index;
    	let if_block;
    	let a_class_value;
    	let a_target_value;
    	let a_rel_value;
    	let current;
    	const if_block_creators = [create_if_block_2$2, create_else_block_2];
    	const if_blocks = [];

    	function select_block_type_2(ctx, dirty) {
    		if (/*custom*/ ctx[1]) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type_2(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			a = element("a");
    			if_block.c();

    			attr_dev(a, "class", a_class_value = "button " + (/*types*/ ctx[6].includes(/*type*/ ctx[0])
    			? `type-${/*type*/ ctx[0]}`
    			: "type-secondary") + " svelte-z9ut62");

    			attr_dev(a, "type", "button");
    			attr_dev(a, "role", "button");
    			attr_dev(a, "target", a_target_value = /*target*/ ctx[4] === "_blank" ? "_blank" : undefined);

    			attr_dev(a, "rel", a_rel_value = /*target*/ ctx[4] === "_blank"
    			? "noreferrer noopener"
    			: undefined);

    			attr_dev(a, "href", /*href*/ ctx[3]);
    			attr_dev(a, "id", /*id*/ ctx[2]);
    			attr_dev(a, "disabled", /*disabled*/ ctx[5]);
    			add_location(a, file$8, 22, 4, 580);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			if_blocks[current_block_type_index].m(a, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type_2(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				} else {
    					if_block.p(ctx, dirty);
    				}

    				transition_in(if_block, 1);
    				if_block.m(a, null);
    			}

    			if (!current || dirty & /*type*/ 1 && a_class_value !== (a_class_value = "button " + (/*types*/ ctx[6].includes(/*type*/ ctx[0])
    			? `type-${/*type*/ ctx[0]}`
    			: "type-secondary") + " svelte-z9ut62")) {
    				attr_dev(a, "class", a_class_value);
    			}

    			if (!current || dirty & /*target*/ 16 && a_target_value !== (a_target_value = /*target*/ ctx[4] === "_blank" ? "_blank" : undefined)) {
    				attr_dev(a, "target", a_target_value);
    			}

    			if (!current || dirty & /*target*/ 16 && a_rel_value !== (a_rel_value = /*target*/ ctx[4] === "_blank"
    			? "noreferrer noopener"
    			: undefined)) {
    				attr_dev(a, "rel", a_rel_value);
    			}

    			if (!current || dirty & /*href*/ 8) {
    				attr_dev(a, "href", /*href*/ ctx[3]);
    			}

    			if (!current || dirty & /*id*/ 4) {
    				attr_dev(a, "id", /*id*/ ctx[2]);
    			}

    			if (!current || dirty & /*disabled*/ 32) {
    				attr_dev(a, "disabled", /*disabled*/ ctx[5]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    			if_blocks[current_block_type_index].d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_1.name,
    		type: "else",
    		source: "(22:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (12:0) {#if !href}
    function create_if_block$2(ctx) {
    	let button;
    	let current_block_type_index;
    	let if_block;
    	let button_class_value;
    	let current;
    	const if_block_creators = [create_if_block_1$2, create_else_block];
    	const if_blocks = [];

    	function select_block_type_1(ctx, dirty) {
    		if (/*custom*/ ctx[1]) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type_1(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			button = element("button");
    			if_block.c();

    			attr_dev(button, "class", button_class_value = "button " + (/*types*/ ctx[6].includes(/*type*/ ctx[0])
    			? `type-${/*type*/ ctx[0]}`
    			: "type-secondary") + " svelte-z9ut62");

    			attr_dev(button, "type", "button");
    			attr_dev(button, "id", /*id*/ ctx[2]);
    			button.disabled = /*disabled*/ ctx[5];
    			add_location(button, file$8, 12, 4, 295);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);
    			if_blocks[current_block_type_index].m(button, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type_1(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				} else {
    					if_block.p(ctx, dirty);
    				}

    				transition_in(if_block, 1);
    				if_block.m(button, null);
    			}

    			if (!current || dirty & /*type*/ 1 && button_class_value !== (button_class_value = "button " + (/*types*/ ctx[6].includes(/*type*/ ctx[0])
    			? `type-${/*type*/ ctx[0]}`
    			: "type-secondary") + " svelte-z9ut62")) {
    				attr_dev(button, "class", button_class_value);
    			}

    			if (!current || dirty & /*id*/ 4) {
    				attr_dev(button, "id", /*id*/ ctx[2]);
    			}

    			if (!current || dirty & /*disabled*/ 32) {
    				prop_dev(button, "disabled", /*disabled*/ ctx[5]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button);
    			if_blocks[current_block_type_index].d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$2.name,
    		type: "if",
    		source: "(12:0) {#if !href}",
    		ctx
    	});

    	return block;
    }

    // (33:8) {:else}
    function create_else_block_2(ctx) {
    	let span;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[8].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

    	const block = {
    		c: function create() {
    			span = element("span");
    			if (default_slot) default_slot.c();
    			attr_dev(span, "class", "svelte-z9ut62");
    			add_location(span, file$8, 33, 12, 1007);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);

    			if (default_slot) {
    				default_slot.m(span, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_2.name,
    		type: "else",
    		source: "(33:8) {:else}",
    		ctx
    	});

    	return block;
    }

    // (31:8) {#if custom}
    function create_if_block_2$2(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[8].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

    	const block = {
    		c: function create() {
    			if (default_slot) default_slot.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot) {
    				default_slot.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$2.name,
    		type: "if",
    		source: "(31:8) {#if custom}",
    		ctx
    	});

    	return block;
    }

    // (16:8) {:else}
    function create_else_block(ctx) {
    	let span;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[8].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

    	const block = {
    		c: function create() {
    			span = element("span");
    			if (default_slot) default_slot.c();
    			attr_dev(span, "class", "svelte-z9ut62");
    			add_location(span, file$8, 16, 12, 483);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);

    			if (default_slot) {
    				default_slot.m(span, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block.name,
    		type: "else",
    		source: "(16:8) {:else}",
    		ctx
    	});

    	return block;
    }

    // (14:8) {#if custom}
    function create_if_block_1$2(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[8].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

    	const block = {
    		c: function create() {
    			if (default_slot) default_slot.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot) {
    				default_slot.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$2.name,
    		type: "if",
    		source: "(14:8) {#if custom}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$8(ctx) {
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block$2, create_else_block_1];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (!/*href*/ ctx[3]) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			if_block.c();
    			if_block_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				} else {
    					if_block.p(ctx, dirty);
    				}

    				transition_in(if_block, 1);
    				if_block.m(if_block_anchor.parentNode, if_block_anchor);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$8.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$8($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Button", slots, ['default']);
    	let { type = "secondary" } = $$props;
    	let { custom = false } = $$props;
    	let { id = undefined } = $$props;
    	let { href = undefined } = $$props;
    	let { target = undefined } = $$props;
    	let { disabled = undefined } = $$props;
    	const types = ["primary", "secondary"];
    	const writable_props = ["type", "custom", "id", "href", "target", "disabled"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Button> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("type" in $$props) $$invalidate(0, type = $$props.type);
    		if ("custom" in $$props) $$invalidate(1, custom = $$props.custom);
    		if ("id" in $$props) $$invalidate(2, id = $$props.id);
    		if ("href" in $$props) $$invalidate(3, href = $$props.href);
    		if ("target" in $$props) $$invalidate(4, target = $$props.target);
    		if ("disabled" in $$props) $$invalidate(5, disabled = $$props.disabled);
    		if ("$$scope" in $$props) $$invalidate(7, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		type,
    		custom,
    		id,
    		href,
    		target,
    		disabled,
    		types
    	});

    	$$self.$inject_state = $$props => {
    		if ("type" in $$props) $$invalidate(0, type = $$props.type);
    		if ("custom" in $$props) $$invalidate(1, custom = $$props.custom);
    		if ("id" in $$props) $$invalidate(2, id = $$props.id);
    		if ("href" in $$props) $$invalidate(3, href = $$props.href);
    		if ("target" in $$props) $$invalidate(4, target = $$props.target);
    		if ("disabled" in $$props) $$invalidate(5, disabled = $$props.disabled);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [type, custom, id, href, target, disabled, types, $$scope, slots];
    }

    class Button extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$8, create_fragment$8, safe_not_equal, {
    			type: 0,
    			custom: 1,
    			id: 2,
    			href: 3,
    			target: 4,
    			disabled: 5
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Button",
    			options,
    			id: create_fragment$8.name
    		});
    	}

    	get type() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set type(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get custom() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set custom(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get id() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get href() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set href(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get target() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set target(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get disabled() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set disabled(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\common\Flex.svelte generated by Svelte v3.38.2 */

    const file$7 = "src\\common\\Flex.svelte";

    function create_fragment$7(ctx) {
    	let div;
    	let div_class_value;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[12].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[11], null);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (default_slot) default_slot.c();

    			attr_dev(div, "class", div_class_value = "flex-container\r\n                " + (/*directions*/ ctx[8].includes(/*direction*/ ctx[1])
    			? `direction-${/*direction*/ ctx[1]}`
    			: "") + "\r\n                " + (/*alignments*/ ctx[9].includes(/*align*/ ctx[2])
    			? `align-${/*align*/ ctx[2]}`
    			: "") + "\r\n                " + (/*alignments*/ ctx[9].includes(/*justify*/ ctx[3])
    			? `justify-${/*justify*/ ctx[3]}`
    			: "") + "\r\n                " + (/*$$props*/ ctx[10].class
    			? /*$$props*/ ctx[10].class
    			: "") + " svelte-gfmrjd");

    			attr_dev(div, "id", /*id*/ ctx[0]);
    			toggle_class(div, "wrap", /*wrap*/ ctx[5]);
    			toggle_class(div, "inline", /*inline*/ ctx[4]);
    			toggle_class(div, "reverse", /*reverse*/ ctx[6]);
    			toggle_class(div, "gap", /*gap*/ ctx[7]);
    			add_location(div, file$7, 15, 4, 429);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			if (default_slot) {
    				default_slot.m(div, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 2048)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[11], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*direction, align, justify, $$props*/ 1038 && div_class_value !== (div_class_value = "flex-container\r\n                " + (/*directions*/ ctx[8].includes(/*direction*/ ctx[1])
    			? `direction-${/*direction*/ ctx[1]}`
    			: "") + "\r\n                " + (/*alignments*/ ctx[9].includes(/*align*/ ctx[2])
    			? `align-${/*align*/ ctx[2]}`
    			: "") + "\r\n                " + (/*alignments*/ ctx[9].includes(/*justify*/ ctx[3])
    			? `justify-${/*justify*/ ctx[3]}`
    			: "") + "\r\n                " + (/*$$props*/ ctx[10].class
    			? /*$$props*/ ctx[10].class
    			: "") + " svelte-gfmrjd")) {
    				attr_dev(div, "class", div_class_value);
    			}

    			if (!current || dirty & /*id*/ 1) {
    				attr_dev(div, "id", /*id*/ ctx[0]);
    			}

    			if (dirty & /*direction, align, justify, $$props, wrap*/ 1070) {
    				toggle_class(div, "wrap", /*wrap*/ ctx[5]);
    			}

    			if (dirty & /*direction, align, justify, $$props, inline*/ 1054) {
    				toggle_class(div, "inline", /*inline*/ ctx[4]);
    			}

    			if (dirty & /*direction, align, justify, $$props, reverse*/ 1102) {
    				toggle_class(div, "reverse", /*reverse*/ ctx[6]);
    			}

    			if (dirty & /*direction, align, justify, $$props, gap*/ 1166) {
    				toggle_class(div, "gap", /*gap*/ ctx[7]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$7.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$7($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Flex", slots, ['default']);
    	let { id = "" } = $$props;
    	let { direction = "" } = $$props;
    	let { align = "" } = $$props;
    	let { justify = "" } = $$props;
    	let { inline = false } = $$props;
    	let { wrap = false } = $$props;
    	let { reverse = false } = $$props;
    	let { gap = false } = $$props;
    	const directions = ["row", "column", "row-reverse", "column-reverse"];
    	const alignments = ["center", "start", "end", "between", "around", "evenly"];

    	$$self.$$set = $$new_props => {
    		$$invalidate(10, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    		if ("id" in $$new_props) $$invalidate(0, id = $$new_props.id);
    		if ("direction" in $$new_props) $$invalidate(1, direction = $$new_props.direction);
    		if ("align" in $$new_props) $$invalidate(2, align = $$new_props.align);
    		if ("justify" in $$new_props) $$invalidate(3, justify = $$new_props.justify);
    		if ("inline" in $$new_props) $$invalidate(4, inline = $$new_props.inline);
    		if ("wrap" in $$new_props) $$invalidate(5, wrap = $$new_props.wrap);
    		if ("reverse" in $$new_props) $$invalidate(6, reverse = $$new_props.reverse);
    		if ("gap" in $$new_props) $$invalidate(7, gap = $$new_props.gap);
    		if ("$$scope" in $$new_props) $$invalidate(11, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		id,
    		direction,
    		align,
    		justify,
    		inline,
    		wrap,
    		reverse,
    		gap,
    		directions,
    		alignments
    	});

    	$$self.$inject_state = $$new_props => {
    		$$invalidate(10, $$props = assign(assign({}, $$props), $$new_props));
    		if ("id" in $$props) $$invalidate(0, id = $$new_props.id);
    		if ("direction" in $$props) $$invalidate(1, direction = $$new_props.direction);
    		if ("align" in $$props) $$invalidate(2, align = $$new_props.align);
    		if ("justify" in $$props) $$invalidate(3, justify = $$new_props.justify);
    		if ("inline" in $$props) $$invalidate(4, inline = $$new_props.inline);
    		if ("wrap" in $$props) $$invalidate(5, wrap = $$new_props.wrap);
    		if ("reverse" in $$props) $$invalidate(6, reverse = $$new_props.reverse);
    		if ("gap" in $$props) $$invalidate(7, gap = $$new_props.gap);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$props = exclude_internal_props($$props);

    	return [
    		id,
    		direction,
    		align,
    		justify,
    		inline,
    		wrap,
    		reverse,
    		gap,
    		directions,
    		alignments,
    		$$props,
    		$$scope,
    		slots
    	];
    }

    class Flex extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$7, create_fragment$7, safe_not_equal, {
    			id: 0,
    			direction: 1,
    			align: 2,
    			justify: 3,
    			inline: 4,
    			wrap: 5,
    			reverse: 6,
    			gap: 7
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Flex",
    			options,
    			id: create_fragment$7.name
    		});
    	}

    	get id() {
    		throw new Error("<Flex>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<Flex>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get direction() {
    		throw new Error("<Flex>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set direction(value) {
    		throw new Error("<Flex>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get align() {
    		throw new Error("<Flex>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set align(value) {
    		throw new Error("<Flex>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get justify() {
    		throw new Error("<Flex>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set justify(value) {
    		throw new Error("<Flex>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get inline() {
    		throw new Error("<Flex>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set inline(value) {
    		throw new Error("<Flex>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get wrap() {
    		throw new Error("<Flex>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set wrap(value) {
    		throw new Error("<Flex>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get reverse() {
    		throw new Error("<Flex>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set reverse(value) {
    		throw new Error("<Flex>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get gap() {
    		throw new Error("<Flex>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set gap(value) {
    		throw new Error("<Flex>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\common\PageSection.svelte generated by Svelte v3.38.2 */

    const file$6 = "src\\common\\PageSection.svelte";

    function create_fragment$6(ctx) {
    	let section;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[2].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[1], null);

    	const block = {
    		c: function create() {
    			section = element("section");
    			if (default_slot) default_slot.c();
    			attr_dev(section, "id", /*id*/ ctx[0]);
    			attr_dev(section, "class", "page-section svelte-1tqjosn");
    			add_location(section, file$6, 5, 4, 61);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, section, anchor);

    			if (default_slot) {
    				default_slot.m(section, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 2)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[1], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*id*/ 1) {
    				attr_dev(section, "id", /*id*/ ctx[0]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(section);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$6.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$6($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("PageSection", slots, ['default']);
    	let { id = undefined } = $$props;
    	const writable_props = ["id"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<PageSection> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("id" in $$props) $$invalidate(0, id = $$props.id);
    		if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({ id });

    	$$self.$inject_state = $$props => {
    		if ("id" in $$props) $$invalidate(0, id = $$props.id);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [id, $$scope, slots];
    }

    class PageSection extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$6, create_fragment$6, safe_not_equal, { id: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "PageSection",
    			options,
    			id: create_fragment$6.name
    		});
    	}

    	get id() {
    		throw new Error("<PageSection>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<PageSection>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\common\text\Title.svelte generated by Svelte v3.38.2 */

    const file$5 = "src\\common\\text\\Title.svelte";

    // (18:25) 
    function create_if_block_2$1(ctx) {
    	let h3;
    	let h3_class_value;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[4].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

    	const block = {
    		c: function create() {
    			h3 = element("h3");
    			if (default_slot) default_slot.c();

    			attr_dev(h3, "class", h3_class_value = "title " + (/*sizes*/ ctx[2].includes(/*size*/ ctx[1])
    			? `size-${/*size*/ ctx[1]}`
    			: "size-1") + " svelte-w6bkvo");

    			toggle_class(h3, "text-center", /*center*/ ctx[0]);
    			add_location(h3, file$5, 18, 8, 561);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h3, anchor);

    			if (default_slot) {
    				default_slot.m(h3, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 8)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*size*/ 2 && h3_class_value !== (h3_class_value = "title " + (/*sizes*/ ctx[2].includes(/*size*/ ctx[1])
    			? `size-${/*size*/ ctx[1]}`
    			: "size-1") + " svelte-w6bkvo")) {
    				attr_dev(h3, "class", h3_class_value);
    			}

    			if (dirty & /*size, center*/ 3) {
    				toggle_class(h3, "text-center", /*center*/ ctx[0]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h3);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$1.name,
    		type: "if",
    		source: "(18:25) ",
    		ctx
    	});

    	return block;
    }

    // (14:25) 
    function create_if_block_1$1(ctx) {
    	let h2;
    	let h2_class_value;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[4].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

    	const block = {
    		c: function create() {
    			h2 = element("h2");
    			if (default_slot) default_slot.c();

    			attr_dev(h2, "class", h2_class_value = "title " + (/*sizes*/ ctx[2].includes(/*size*/ ctx[1])
    			? `size-${/*size*/ ctx[1]}`
    			: "size-1") + " svelte-w6bkvo");

    			toggle_class(h2, "text-center", /*center*/ ctx[0]);
    			add_location(h2, file$5, 14, 8, 390);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h2, anchor);

    			if (default_slot) {
    				default_slot.m(h2, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 8)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*size*/ 2 && h2_class_value !== (h2_class_value = "title " + (/*sizes*/ ctx[2].includes(/*size*/ ctx[1])
    			? `size-${/*size*/ ctx[1]}`
    			: "size-1") + " svelte-w6bkvo")) {
    				attr_dev(h2, "class", h2_class_value);
    			}

    			if (dirty & /*size, center*/ 3) {
    				toggle_class(h2, "text-center", /*center*/ ctx[0]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h2);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$1.name,
    		type: "if",
    		source: "(14:25) ",
    		ctx
    	});

    	return block;
    }

    // (10:4) {#if size === 1}
    function create_if_block$1(ctx) {
    	let h1;
    	let h1_class_value;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[4].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			if (default_slot) default_slot.c();

    			attr_dev(h1, "class", h1_class_value = "title " + (/*sizes*/ ctx[2].includes(/*size*/ ctx[1])
    			? `size-${/*size*/ ctx[1]}`
    			: "size-1") + " svelte-w6bkvo");

    			toggle_class(h1, "text-center", /*center*/ ctx[0]);
    			add_location(h1, file$5, 10, 8, 219);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);

    			if (default_slot) {
    				default_slot.m(h1, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 8)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*size*/ 2 && h1_class_value !== (h1_class_value = "title " + (/*sizes*/ ctx[2].includes(/*size*/ ctx[1])
    			? `size-${/*size*/ ctx[1]}`
    			: "size-1") + " svelte-w6bkvo")) {
    				attr_dev(h1, "class", h1_class_value);
    			}

    			if (dirty & /*size, center*/ 3) {
    				toggle_class(h1, "text-center", /*center*/ ctx[0]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$1.name,
    		type: "if",
    		source: "(10:4) {#if size === 1}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$5(ctx) {
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block$1, create_if_block_1$1, create_if_block_2$1];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*size*/ ctx[1] === 1) return 0;
    		if (/*size*/ ctx[1] === 2) return 1;
    		if (/*size*/ ctx[1] === 3) return 2;
    		return -1;
    	}

    	if (~(current_block_type_index = select_block_type(ctx))) {
    		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	}

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].m(target, anchor);
    			}

    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if (~current_block_type_index) {
    					if_blocks[current_block_type_index].p(ctx, dirty);
    				}
    			} else {
    				if (if_block) {
    					group_outros();

    					transition_out(if_blocks[previous_block_index], 1, 1, () => {
    						if_blocks[previous_block_index] = null;
    					});

    					check_outros();
    				}

    				if (~current_block_type_index) {
    					if_block = if_blocks[current_block_type_index];

    					if (!if_block) {
    						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    						if_block.c();
    					} else {
    						if_block.p(ctx, dirty);
    					}

    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				} else {
    					if_block = null;
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].d(detaching);
    			}

    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Title", slots, ['default']);
    	let { center = false } = $$props;
    	let { size = 1 } = $$props;
    	const sizes = [1, 2, 3];
    	const writable_props = ["center", "size"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Title> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("center" in $$props) $$invalidate(0, center = $$props.center);
    		if ("size" in $$props) $$invalidate(1, size = $$props.size);
    		if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({ center, size, sizes });

    	$$self.$inject_state = $$props => {
    		if ("center" in $$props) $$invalidate(0, center = $$props.center);
    		if ("size" in $$props) $$invalidate(1, size = $$props.size);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [center, size, sizes, $$scope, slots];
    }

    class Title extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, { center: 0, size: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Title",
    			options,
    			id: create_fragment$5.name
    		});
    	}

    	get center() {
    		throw new Error("<Title>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set center(value) {
    		throw new Error("<Title>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get size() {
    		throw new Error("<Title>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set size(value) {
    		throw new Error("<Title>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\common\text\Subtext.svelte generated by Svelte v3.38.2 */

    const file$4 = "src\\common\\text\\Subtext.svelte";

    function create_fragment$4(ctx) {
    	let p;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[2].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[1], null);

    	const block = {
    		c: function create() {
    			p = element("p");
    			if (default_slot) default_slot.c();
    			attr_dev(p, "class", "subtext svelte-p6gm5t");
    			toggle_class(p, "text-center", /*center*/ ctx[0]);
    			add_location(p, file$4, 5, 4, 61);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);

    			if (default_slot) {
    				default_slot.m(p, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 2)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[1], dirty, null, null);
    				}
    			}

    			if (dirty & /*center*/ 1) {
    				toggle_class(p, "text-center", /*center*/ ctx[0]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Subtext", slots, ['default']);
    	let { center = false } = $$props;
    	const writable_props = ["center"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Subtext> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("center" in $$props) $$invalidate(0, center = $$props.center);
    		if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({ center });

    	$$self.$inject_state = $$props => {
    		if ("center" in $$props) $$invalidate(0, center = $$props.center);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [center, $$scope, slots];
    }

    class Subtext extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, { center: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Subtext",
    			options,
    			id: create_fragment$4.name
    		});
    	}

    	get center() {
    		throw new Error("<Subtext>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set center(value) {
    		throw new Error("<Subtext>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\common\text\Anchor.svelte generated by Svelte v3.38.2 */

    const file$3 = "src\\common\\text\\Anchor.svelte";

    function create_fragment$3(ctx) {
    	let a;
    	let a_target_value;
    	let a_rel_value;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[3].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

    	const block = {
    		c: function create() {
    			a = element("a");
    			if (default_slot) default_slot.c();
    			attr_dev(a, "class", "anchor svelte-1wdnh4l");
    			attr_dev(a, "href", /*href*/ ctx[0]);
    			attr_dev(a, "target", a_target_value = /*target*/ ctx[1] === "_blank" ? "_blank" : undefined);

    			attr_dev(a, "rel", a_rel_value = /*target*/ ctx[1] === "_blank"
    			? "noreferrer noopener"
    			: undefined);

    			add_location(a, file$3, 6, 4, 99);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);

    			if (default_slot) {
    				default_slot.m(a, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 4)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*href*/ 1) {
    				attr_dev(a, "href", /*href*/ ctx[0]);
    			}

    			if (!current || dirty & /*target*/ 2 && a_target_value !== (a_target_value = /*target*/ ctx[1] === "_blank" ? "_blank" : undefined)) {
    				attr_dev(a, "target", a_target_value);
    			}

    			if (!current || dirty & /*target*/ 2 && a_rel_value !== (a_rel_value = /*target*/ ctx[1] === "_blank"
    			? "noreferrer noopener"
    			: undefined)) {
    				attr_dev(a, "rel", a_rel_value);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Anchor", slots, ['default']);
    	let { href = undefined } = $$props;
    	let { target = undefined } = $$props;
    	const writable_props = ["href", "target"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Anchor> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("href" in $$props) $$invalidate(0, href = $$props.href);
    		if ("target" in $$props) $$invalidate(1, target = $$props.target);
    		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({ href, target });

    	$$self.$inject_state = $$props => {
    		if ("href" in $$props) $$invalidate(0, href = $$props.href);
    		if ("target" in $$props) $$invalidate(1, target = $$props.target);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [href, target, $$scope, slots];
    }

    class Anchor extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, { href: 0, target: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Anchor",
    			options,
    			id: create_fragment$3.name
    		});
    	}

    	get href() {
    		throw new Error("<Anchor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set href(value) {
    		throw new Error("<Anchor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get target() {
    		throw new Error("<Anchor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set target(value) {
    		throw new Error("<Anchor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Navbar.svelte generated by Svelte v3.38.2 */
    const file$2 = "src\\Navbar.svelte";

    function get_each_context$2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[2] = list[i];
    	child_ctx[4] = i;
    	return child_ctx;
    }

    // (15:12) {#each items as item, i}
    function create_each_block$2(ctx) {
    	let a;
    	let t0_value = /*item*/ ctx[2].name + "";
    	let t0;
    	let t1;
    	let a_href_value;
    	let a_target_value;
    	let a_rel_value;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t0 = text(t0_value);
    			t1 = space();
    			attr_dev(a, "class", "navbar-item svelte-2s7aa4");
    			attr_dev(a, "href", a_href_value = /*item*/ ctx[2].href);
    			attr_dev(a, "target", a_target_value = /*item*/ ctx[2].external === true ? "_blank" : undefined);

    			attr_dev(a, "rel", a_rel_value = /*item*/ ctx[2].external === true
    			? "noreferrer noopener"
    			: undefined);

    			toggle_class(a, "selected", /*selectedItem*/ ctx[1] === /*i*/ ctx[4]);
    			add_location(a, file$2, 15, 16, 485);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t0);
    			append_dev(a, t1);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*items*/ 1 && t0_value !== (t0_value = /*item*/ ctx[2].name + "")) set_data_dev(t0, t0_value);

    			if (dirty & /*items*/ 1 && a_href_value !== (a_href_value = /*item*/ ctx[2].href)) {
    				attr_dev(a, "href", a_href_value);
    			}

    			if (dirty & /*items*/ 1 && a_target_value !== (a_target_value = /*item*/ ctx[2].external === true ? "_blank" : undefined)) {
    				attr_dev(a, "target", a_target_value);
    			}

    			if (dirty & /*items*/ 1 && a_rel_value !== (a_rel_value = /*item*/ ctx[2].external === true
    			? "noreferrer noopener"
    			: undefined)) {
    				attr_dev(a, "rel", a_rel_value);
    			}

    			if (dirty & /*selectedItem*/ 2) {
    				toggle_class(a, "selected", /*selectedItem*/ ctx[1] === /*i*/ ctx[4]);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$2.name,
    		type: "each",
    		source: "(15:12) {#each items as item, i}",
    		ctx
    	});

    	return block;
    }

    // (25:8) <Button id="theme-button" custom>
    function create_default_slot$2(ctx) {
    	let svg;
    	let path;

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			attr_dev(path, "d", "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z");
    			attr_dev(path, "fill", "currentColor");
    			add_location(path, file$2, 26, 16, 1028);
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg, "width", "20");
    			attr_dev(svg, "height", "20");
    			attr_dev(svg, "viewBox", "0 0 24 24");
    			attr_dev(svg, "fill", "none");
    			add_location(svg, file$2, 25, 12, 915);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, path);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$2.name,
    		type: "slot",
    		source: "(25:8) <Button id=\\\"theme-button\\\" custom>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$2(ctx) {
    	let header;
    	let nav;
    	let a;
    	let img;
    	let img_src_value;
    	let t0;
    	let div;
    	let t1;
    	let t2;
    	let button;
    	let current;
    	let each_value = /*items*/ ctx[0];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
    	}

    	button = new Button({
    			props: {
    				id: "theme-button",
    				custom: true,
    				$$slots: { default: [create_default_slot$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			header = element("header");
    			nav = element("nav");
    			a = element("a");
    			img = element("img");
    			t0 = space();
    			div = element("div");
    			t1 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t2 = space();
    			create_component(button.$$.fragment);
    			attr_dev(img, "class", "navbar-logo svelte-2s7aa4");
    			if (img.src !== (img_src_value = "https://files-community.github.io/img/logo.png")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Files logo");
    			add_location(img, file$2, 11, 16, 250);
    			attr_dev(a, "class", "navbar-logo-wrap svelte-2s7aa4");
    			attr_dev(a, "href", "/");
    			add_location(a, file$2, 10, 12, 195);
    			attr_dev(div, "class", "navbar-divider svelte-2s7aa4");
    			attr_dev(div, "role", "separator");
    			add_location(div, file$2, 13, 12, 378);
    			attr_dev(nav, "class", "svelte-2s7aa4");
    			add_location(nav, file$2, 9, 8, 176);
    			attr_dev(header, "class", "navbar svelte-2s7aa4");
    			add_location(header, file$2, 8, 4, 143);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, header, anchor);
    			append_dev(header, nav);
    			append_dev(nav, a);
    			append_dev(a, img);
    			append_dev(nav, t0);
    			append_dev(nav, div);
    			append_dev(nav, t1);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(nav, null);
    			}

    			append_dev(header, t2);
    			mount_component(button, header, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*items, undefined, selectedItem*/ 3) {
    				each_value = /*items*/ ctx[0];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$2(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block$2(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(nav, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}

    			const button_changes = {};

    			if (dirty & /*$$scope*/ 32) {
    				button_changes.$$scope = { dirty, ctx };
    			}

    			button.$set(button_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(header);
    			destroy_each(each_blocks, detaching);
    			destroy_component(button);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Navbar", slots, []);
    	let { items = [] } = $$props;
    	let { selectedItem = undefined } = $$props;
    	const writable_props = ["items", "selectedItem"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Navbar> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("items" in $$props) $$invalidate(0, items = $$props.items);
    		if ("selectedItem" in $$props) $$invalidate(1, selectedItem = $$props.selectedItem);
    	};

    	$$self.$capture_state = () => ({ Button, items, selectedItem });

    	$$self.$inject_state = $$props => {
    		if ("items" in $$props) $$invalidate(0, items = $$props.items);
    		if ("selectedItem" in $$props) $$invalidate(1, selectedItem = $$props.selectedItem);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [items, selectedItem];
    }

    class Navbar extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { items: 0, selectedItem: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Navbar",
    			options,
    			id: create_fragment$2.name
    		});
    	}

    	get items() {
    		throw new Error("<Navbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set items(value) {
    		throw new Error("<Navbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get selectedItem() {
    		throw new Error("<Navbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set selectedItem(value) {
    		throw new Error("<Navbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\AppSkeleton.svelte generated by Svelte v3.38.2 */
    const file$1 = "src\\AppSkeleton.svelte";

    function get_each_context$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    // (106:16) <Flex align="center" id="app-skeleton-sidebar-header">
    function create_default_slot_3$1(ctx) {
    	let button;
    	let svg;
    	let path;
    	let t0;
    	let h5;

    	const block = {
    		c: function create() {
    			button = element("button");
    			svg = svg_element("svg");
    			path = svg_element("path");
    			t0 = space();
    			h5 = element("h5");
    			h5.textContent = "Files";
    			attr_dev(path, "d", "M2.75254 17.9997H21.2525C21.6667 17.9997 22.0025 18.3355 22.0025 18.7497C22.0025 19.1294 21.7204 19.4432 21.3543 19.4928L21.2525 19.4997H2.75254C2.33832 19.4997 2.00254 19.1639 2.00254 18.7497C2.00254 18.37 2.28469 18.0562 2.65077 18.0065L2.75254 17.9997H21.2525H2.75254ZM2.75254 11.5027H21.2525C21.6667 11.5027 22.0025 11.8385 22.0025 12.2527C22.0025 12.6324 21.7204 12.9462 21.3543 12.9959L21.2525 13.0027H2.75254C2.33832 13.0027 2.00254 12.6669 2.00254 12.2527C2.00254 11.873 2.28469 11.5592 2.65077 11.5095L2.75254 11.5027H21.2525H2.75254ZM2.75168 5.00293H21.2517C21.6659 5.00293 22.0017 5.33872 22.0017 5.75293C22.0017 6.13263 21.7195 6.44642 21.3535 6.49608L21.2517 6.50293H2.75168C2.33746 6.50293 2.00168 6.16714 2.00168 5.75293C2.00168 5.37323 2.28383 5.05944 2.64991 5.00978L2.75168 5.00293H21.2517H2.75168Z");
    			attr_dev(path, "fill", "currentColor");
    			attr_dev(path, "class", "svelte-1iohb8x");
    			add_location(path, file$1, 108, 28, 3230);
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg, "width", "18");
    			attr_dev(svg, "height", "18");
    			attr_dev(svg, "viewBox", "0 0 24 24");
    			attr_dev(svg, "fill", "none");
    			attr_dev(svg, "class", "svelte-1iohb8x");
    			add_location(svg, file$1, 107, 24, 3105);
    			attr_dev(button, "class", "sidebar-button svelte-1iohb8x");
    			add_location(button, file$1, 106, 20, 3048);
    			attr_dev(h5, "class", "svelte-1iohb8x");
    			add_location(h5, file$1, 111, 20, 4163);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);
    			append_dev(button, svg);
    			append_dev(svg, path);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, h5, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(h5);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$1.name,
    		type: "slot",
    		source: "(106:16) <Flex align=\\\"center\\\" id=\\\"app-skeleton-sidebar-header\\\">",
    		ctx
    	});

    	return block;
    }

    // (141:20) <Flex id="app-skeleton-navigation-container">
    function create_default_slot_2$1(ctx) {
    	let button0;
    	let svg0;
    	let path0;
    	let t0;
    	let button1;
    	let svg1;
    	let path1;
    	let t1;
    	let button2;
    	let svg2;
    	let path2;
    	let t2;
    	let button3;
    	let svg3;
    	let path3;
    	let t3;
    	let div;
    	let t5;
    	let button4;
    	let svg4;
    	let path4;

    	const block = {
    		c: function create() {
    			button0 = element("button");
    			svg0 = svg_element("svg");
    			path0 = svg_element("path");
    			t0 = space();
    			button1 = element("button");
    			svg1 = svg_element("svg");
    			path1 = svg_element("path");
    			t1 = space();
    			button2 = element("button");
    			svg2 = svg_element("svg");
    			path2 = svg_element("path");
    			t2 = space();
    			button3 = element("button");
    			svg3 = svg_element("svg");
    			path3 = svg_element("path");
    			t3 = space();
    			div = element("div");
    			div.textContent = "Preview";
    			t5 = space();
    			button4 = element("button");
    			svg4 = svg_element("svg");
    			path4 = svg_element("path");
    			attr_dev(path0, "d", "M44 24C44 24.6904 43.4404 25.25 42.75 25.25H10.3041L23.1264 37.8586C23.6187 38.3426 23.6253 39.134 23.1413 39.6263C22.6572 40.1185 21.8658 40.1252 21.3736 39.6411L6.38563 24.903C6.37656 24.8943 6.36759 24.8854 6.35872 24.8764C6.14696 24.6611 6.02911 24.3884 6.00476 24.1094C5.99775 24.029 5.99848 23.9481 6.00696 23.8679C6.03557 23.5967 6.15267 23.333 6.35872 23.1234C6.37242 23.1095 6.38611 23.096 6.39982 23.0829L21.3736 8.35872C21.8658 7.87468 22.6572 7.88134 23.1413 8.37358C23.6253 8.86582 23.6187 9.65724 23.1264 10.1413L10.304 22.75H42.75C43.4404 22.75 44 23.3096 44 24Z");
    			attr_dev(path0, "fill", "currentColor");
    			attr_dev(path0, "class", "svelte-1iohb8x");
    			add_location(path0, file$1, 143, 32, 7571);
    			attr_dev(svg0, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg0, "width", "48");
    			attr_dev(svg0, "height", "48");
    			attr_dev(svg0, "viewBox", "0 0 48 48");
    			attr_dev(svg0, "fill", "none");
    			attr_dev(svg0, "class", "svelte-1iohb8x");
    			add_location(svg0, file$1, 142, 28, 7442);
    			attr_dev(button0, "class", "svelte-1iohb8x");
    			add_location(button0, file$1, 141, 24, 7404);
    			attr_dev(path1, "d", "M4 23.9999C4 23.3096 4.55964 22.7499 5.25 22.7499H37.6959L24.8736 10.1413C24.3813 9.65725 24.3747 8.86582 24.8587 8.37358C25.3428 7.88134 26.1342 7.87468 26.6264 8.35872L41.6144 23.0969C41.6234 23.1056 41.6324 23.1145 41.6413 23.1235C41.853 23.3389 41.9709 23.6115 41.9952 23.8906C42.0023 23.9709 42.0015 24.0518 41.993 24.132C41.9644 24.4032 41.8473 24.667 41.6413 24.8765C41.6276 24.8904 41.6139 24.9039 41.6002 24.917L26.6264 39.6413C26.1342 40.1253 25.3428 40.1187 24.8587 39.6264C24.3747 39.1342 24.3813 38.3427 24.8736 37.8587L37.696 25.2499H5.25C4.55964 25.2499 4 24.6903 4 23.9999Z");
    			attr_dev(path1, "fill", "currentColor");
    			attr_dev(path1, "class", "svelte-1iohb8x");
    			add_location(path1, file$1, 148, 32, 8444);
    			attr_dev(svg1, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg1, "width", "48");
    			attr_dev(svg1, "height", "48");
    			attr_dev(svg1, "viewBox", "0 0 48 48");
    			attr_dev(svg1, "fill", "none");
    			attr_dev(svg1, "class", "svelte-1iohb8x");
    			add_location(svg1, file$1, 147, 28, 8315);
    			attr_dev(button1, "class", "svelte-1iohb8x");
    			add_location(button1, file$1, 146, 24, 8277);
    			attr_dev(path2, "d", "M23.9999 44C23.3096 44 22.7499 43.4404 22.7499 42.75V10.3041L10.1413 23.1264C9.65725 23.6187 8.86582 23.6253 8.37358 23.1413C7.88134 22.6572 7.87468 21.8658 8.35872 21.3736L23.0969 6.38563C23.1056 6.37656 23.1145 6.36759 23.1235 6.35872C23.3389 6.14696 23.6115 6.02911 23.8906 6.00476C23.9709 5.99775 24.0518 5.99848 24.132 6.00696C24.4032 6.03557 24.667 6.15267 24.8765 6.35872C24.8904 6.37242 24.9039 6.38611 24.917 6.39982L39.6413 21.3736C40.1253 21.8658 40.1187 22.6572 39.6264 23.1413C39.1342 23.6253 38.3427 23.6187 37.8587 23.1264L25.2499 10.304V42.75C25.2499 43.4404 24.6903 44 23.9999 44Z");
    			attr_dev(path2, "fill", "currentColor");
    			attr_dev(path2, "class", "svelte-1iohb8x");
    			add_location(path2, file$1, 153, 32, 9329);
    			attr_dev(svg2, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg2, "width", "48");
    			attr_dev(svg2, "height", "48");
    			attr_dev(svg2, "viewBox", "0 0 48 48");
    			attr_dev(svg2, "fill", "none");
    			attr_dev(svg2, "class", "svelte-1iohb8x");
    			add_location(svg2, file$1, 152, 28, 9200);
    			attr_dev(button2, "class", "svelte-1iohb8x");
    			add_location(button2, file$1, 151, 24, 9162);
    			attr_dev(path3, "d", "M12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 11.6236 19.4723 11.2538 19.4188 10.8923C19.3515 10.4382 19.6839 10 20.1429 10C20.5138 10 20.839 10.2562 20.8953 10.6228C20.9642 11.0718 21 11.5317 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.3051 3 16.4077 3.86656 18 5.29168V4.25C18 3.83579 18.3358 3.5 18.75 3.5C19.1642 3.5 19.5 3.83579 19.5 4.25V7.25C19.5 7.66421 19.1642 8 18.75 8H15.75C15.3358 8 15 7.66421 15 7.25C15 6.83579 15.3358 6.5 15.75 6.5H17.0991C15.7609 5.25883 13.9691 4.5 12 4.5Z");
    			attr_dev(path3, "fill", "currentColor");
    			attr_dev(path3, "class", "svelte-1iohb8x");
    			add_location(path3, file$1, 158, 32, 10222);
    			attr_dev(svg3, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg3, "width", "24");
    			attr_dev(svg3, "height", "24");
    			attr_dev(svg3, "viewBox", "0 0 24 24");
    			attr_dev(svg3, "fill", "none");
    			attr_dev(svg3, "class", "svelte-1iohb8x");
    			add_location(svg3, file$1, 157, 28, 10093);
    			attr_dev(button3, "class", "svelte-1iohb8x");
    			add_location(button3, file$1, 156, 24, 10055);
    			attr_dev(div, "class", "address-bar svelte-1iohb8x");
    			add_location(div, file$1, 161, 24, 10951);
    			attr_dev(path4, "d", "M20 6C12.268 6 6 12.268 6 20C6 27.732 12.268 34 20 34C23.4159 34 26.5461 32.7766 28.9763 30.7441L39.8662 41.6339C40.3543 42.122 41.1458 42.122 41.6339 41.6339C42.1221 41.1457 42.1221 40.3543 41.6339 39.8661L30.7441 28.9763C32.7766 26.5461 34 23.4159 34 20C34 12.268 27.732 6 20 6ZM8.5 20C8.5 13.6487 13.6487 8.5 20 8.5C26.3513 8.5 31.5 13.6487 31.5 20C31.5 26.3513 26.3513 31.5 20 31.5C13.6487 31.5 8.5 26.3513 8.5 20Z");
    			attr_dev(path4, "fill", "currentColor");
    			attr_dev(path4, "class", "svelte-1iohb8x");
    			add_location(path4, file$1, 164, 32, 11182);
    			attr_dev(svg4, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg4, "width", "48");
    			attr_dev(svg4, "height", "48");
    			attr_dev(svg4, "viewBox", "0 0 48 48");
    			attr_dev(svg4, "fill", "none");
    			attr_dev(svg4, "class", "svelte-1iohb8x");
    			add_location(svg4, file$1, 163, 28, 11053);
    			attr_dev(button4, "class", "svelte-1iohb8x");
    			add_location(button4, file$1, 162, 24, 11015);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button0, anchor);
    			append_dev(button0, svg0);
    			append_dev(svg0, path0);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, button1, anchor);
    			append_dev(button1, svg1);
    			append_dev(svg1, path1);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, button2, anchor);
    			append_dev(button2, svg2);
    			append_dev(svg2, path2);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, button3, anchor);
    			append_dev(button3, svg3);
    			append_dev(svg3, path3);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, div, anchor);
    			insert_dev(target, t5, anchor);
    			insert_dev(target, button4, anchor);
    			append_dev(button4, svg4);
    			append_dev(svg4, path4);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button0);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(button1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(button2);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(button3);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(div);
    			if (detaching) detach_dev(t5);
    			if (detaching) detach_dev(button4);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$1.name,
    		type: "slot",
    		source: "(141:20) <Flex id=\\\"app-skeleton-navigation-container\\\">",
    		ctx
    	});

    	return block;
    }

    // (169:20) <Flex id="app-skeleton-options-container" align="center" justify="end">
    function create_default_slot_1$1(ctx) {
    	let button0;
    	let svg0;
    	let path0;
    	let t0;
    	let button1;
    	let svg1;
    	let path1;
    	let t1;
    	let button2;
    	let svg2;
    	let path2;
    	let t2;
    	let button3;
    	let svg3;
    	let path3;

    	const block = {
    		c: function create() {
    			button0 = element("button");
    			svg0 = svg_element("svg");
    			path0 = svg_element("path");
    			t0 = space();
    			button1 = element("button");
    			svg1 = svg_element("svg");
    			path1 = svg_element("path");
    			t1 = space();
    			button2 = element("button");
    			svg2 = svg_element("svg");
    			path2 = svg_element("path");
    			t2 = space();
    			button3 = element("button");
    			svg3 = svg_element("svg");
    			path3 = svg_element("path");
    			attr_dev(path0, "d", "M6.78033 4.78033C7.07322 4.48744 7.07322 4.01256 6.78033 3.71967C6.48744 3.42678 6.01256 3.42678 5.71967 3.71967L3.75 5.68934L3.28033 5.21967C2.98744 4.92678 2.51256 4.92678 2.21967 5.21967C1.92678 5.51256 1.92678 5.98744 2.21967 6.28033L3.21967 7.28033C3.51256 7.57322 3.98744 7.57322 4.28033 7.28033L6.78033 4.78033ZM21.25 18.0068H9.75L9.64823 18.0137C9.28215 18.0634 9 18.3772 9 18.7568C9 19.1711 9.33579 19.5068 9.75 19.5068H21.25L21.3518 19.5C21.7178 19.4503 22 19.1365 22 18.7568C22 18.3426 21.6642 18.0068 21.25 18.0068ZM21.25 11.5H9.75L9.64823 11.5068C9.28215 11.5565 9 11.8703 9 12.25C9 12.6642 9.33579 13 9.75 13H21.25L21.3518 12.9932C21.7178 12.9435 22 12.6297 22 12.25C22 11.8358 21.6642 11.5 21.25 11.5ZM21.25 5H9.75L9.64823 5.00685C9.28215 5.05651 9 5.3703 9 5.75C9 6.16421 9.33579 6.5 9.75 6.5H21.25L21.3518 6.49315C21.7178 6.44349 22 6.1297 22 5.75C22 5.33579 21.6642 5 21.25 5ZM6.78033 17.7803C7.07322 17.4874 7.07322 17.0126 6.78033 16.7197C6.48744 16.4268 6.01256 16.4268 5.71967 16.7197L3.75 18.6893L3.28033 18.2197C2.98744 17.9268 2.51256 17.9268 2.21967 18.2197C1.92678 18.5126 1.92678 18.9874 2.21967 19.2803L3.21967 20.2803C3.51256 20.5732 3.98744 20.5732 4.28033 20.2803L6.78033 17.7803ZM6.78033 10.2197C7.07322 10.5126 7.07322 10.9874 6.78033 11.2803L4.28033 13.7803C3.98744 14.0732 3.51256 14.0732 3.21967 13.7803L2.21967 12.7803C1.92678 12.4874 1.92678 12.0126 2.21967 11.7197C2.51256 11.4268 2.98744 11.4268 3.28033 11.7197L3.75 12.1893L5.71967 10.2197C6.01256 9.92678 6.48744 9.92678 6.78033 10.2197Z");
    			attr_dev(path0, "fill", "currentColor");
    			attr_dev(path0, "class", "svelte-1iohb8x");
    			add_location(path0, file$1, 171, 32, 12018);
    			attr_dev(svg0, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg0, "width", "24");
    			attr_dev(svg0, "height", "24");
    			attr_dev(svg0, "viewBox", "0 0 24 24");
    			attr_dev(svg0, "fill", "none");
    			attr_dev(svg0, "class", "svelte-1iohb8x");
    			add_location(svg0, file$1, 170, 28, 11889);
    			attr_dev(button0, "class", "svelte-1iohb8x");
    			add_location(button0, file$1, 169, 24, 11851);
    			attr_dev(path1, "d", "M10.75 15C11.9926 15 13 16.0074 13 17.25V22.75C13 23.9926 11.9926 25 10.75 25H5.25C4.00736 25 3 23.9926 3 22.75V17.25C3 16.0074 4.00736 15 5.25 15H10.75ZM22.75 15C23.9926 15 25 16.0074 25 17.25V22.75C25 23.9926 23.9926 25 22.75 25H17.25C16.0074 25 15 23.9926 15 22.75V17.25C15 16.0074 16.0074 15 17.25 15H22.75ZM10.75 16.5H5.25C4.83579 16.5 4.5 16.8358 4.5 17.25V22.75C4.5 23.1642 4.83579 23.5 5.25 23.5H10.75C11.1642 23.5 11.5 23.1642 11.5 22.75V17.25C11.5 16.8358 11.1642 16.5 10.75 16.5ZM22.75 16.5H17.25C16.8358 16.5 16.5 16.8358 16.5 17.25V22.75C16.5 23.1642 16.8358 23.5 17.25 23.5H22.75C23.1642 23.5 23.5 23.1642 23.5 22.75V17.25C23.5 16.8358 23.1642 16.5 22.75 16.5ZM10.75 3C11.9926 3 13 4.00736 13 5.25V10.75C13 11.9926 11.9926 13 10.75 13H5.25C4.00736 13 3 11.9926 3 10.75V5.25C3 4.00736 4.00736 3 5.25 3H10.75ZM22.75 3C23.9926 3 25 4.00736 25 5.25V10.75C25 11.9926 23.9926 13 22.75 13H17.25C16.0074 13 15 11.9926 15 10.75V5.25C15 4.00736 16.0074 3 17.25 3H22.75ZM10.75 4.5H5.25C4.83579 4.5 4.5 4.83579 4.5 5.25V10.75C4.5 11.1642 4.83579 11.5 5.25 11.5H10.75C11.1642 11.5 11.5 11.1642 11.5 10.75V5.25C11.5 4.83579 11.1642 4.5 10.75 4.5ZM22.75 4.5H17.25C16.8358 4.5 16.5 4.83579 16.5 5.25V10.75C16.5 11.1642 16.8358 11.5 17.25 11.5H22.75C23.1642 11.5 23.5 11.1642 23.5 10.75V5.25C23.5 4.83579 23.1642 4.5 22.75 4.5Z");
    			attr_dev(path1, "fill", "currentColor");
    			attr_dev(path1, "class", "svelte-1iohb8x");
    			add_location(path1, file$1, 176, 32, 13844);
    			attr_dev(svg1, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg1, "width", "28");
    			attr_dev(svg1, "height", "28");
    			attr_dev(svg1, "viewBox", "0 0 28 28");
    			attr_dev(svg1, "fill", "none");
    			attr_dev(svg1, "class", "svelte-1iohb8x");
    			add_location(svg1, file$1, 175, 28, 13715);
    			attr_dev(button1, "class", "svelte-1iohb8x");
    			add_location(button1, file$1, 174, 24, 13677);
    			attr_dev(path2, "d", "M8.75 8C6.12665 8 4 10.1266 4 12.75V35.25C4 37.8734 6.12665 40 8.75 40H39.25C41.8734 40 44 37.8734 44 35.25V12.75C44 10.1266 41.8734 8 39.25 8H8.75ZM6.5 12.75C6.5 11.5074 7.50736 10.5 8.75 10.5H29V37.5H8.75C7.50736 37.5 6.5 36.4926 6.5 35.25V12.75ZM31.5 37.5V10.5H39.25C40.4926 10.5 41.5 11.5074 41.5 12.75V35.25C41.5 36.4926 40.4926 37.5 39.25 37.5H31.5Z");
    			attr_dev(path2, "fill", "currentColor");
    			attr_dev(path2, "class", "svelte-1iohb8x");
    			add_location(path2, file$1, 181, 32, 15464);
    			attr_dev(svg2, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg2, "width", "48");
    			attr_dev(svg2, "height", "48");
    			attr_dev(svg2, "viewBox", "0 0 48 48");
    			attr_dev(svg2, "fill", "none");
    			attr_dev(svg2, "class", "svelte-1iohb8x");
    			add_location(svg2, file$1, 180, 28, 15335);
    			attr_dev(button2, "class", "svelte-1iohb8x");
    			add_location(button2, file$1, 179, 24, 15297);
    			attr_dev(path3, "d", "M15.752 24C15.752 25.7949 14.2969 27.25 12.502 27.25C10.707 27.25 9.25195 25.7949 9.25195 24C9.25195 22.2051 10.707 20.75 12.502 20.75C14.2969 20.75 15.752 22.2051 15.752 24Z M27.252 24C27.252 25.7949 25.7969 27.25 24.002 27.25C22.207 27.25 20.752 25.7949 20.752 24C20.752 22.2051 22.207 20.75 24.002 20.75C25.7969 20.75 27.252 22.2051 27.252 24Z M35.502 27.25C37.2969 27.25 38.752 25.7949 38.752 24C38.752 22.2051 37.2969 20.75 35.502 20.75C33.707 20.75 32.252 22.2051 32.252 24C32.252 25.7949 33.707 27.25 35.502 27.25Z");
    			attr_dev(path3, "fill", "currentColor");
    			attr_dev(path3, "class", "svelte-1iohb8x");
    			add_location(path3, file$1, 186, 32, 16115);
    			attr_dev(svg3, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg3, "width", "48");
    			attr_dev(svg3, "height", "48");
    			attr_dev(svg3, "viewBox", "0 0 48 48");
    			attr_dev(svg3, "fill", "none");
    			attr_dev(svg3, "class", "svelte-1iohb8x");
    			add_location(svg3, file$1, 185, 28, 15986);
    			attr_dev(button3, "class", "svelte-1iohb8x");
    			add_location(button3, file$1, 184, 24, 15948);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button0, anchor);
    			append_dev(button0, svg0);
    			append_dev(svg0, path0);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, button1, anchor);
    			append_dev(button1, svg1);
    			append_dev(svg1, path1);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, button2, anchor);
    			append_dev(button2, svg2);
    			append_dev(svg2, path2);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, button3, anchor);
    			append_dev(button3, svg3);
    			append_dev(svg3, path3);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button0);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(button1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(button2);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(button3);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$1.name,
    		type: "slot",
    		source: "(169:20) <Flex id=\\\"app-skeleton-options-container\\\" align=\\\"center\\\" justify=\\\"end\\\">",
    		ctx
    	});

    	return block;
    }

    // (204:28) {#each files as file}
    function create_each_block$1(ctx) {
    	let tr;
    	let td0;
    	let img;
    	let img_src_value;
    	let t0;
    	let td1;
    	let t1_value = /*file*/ ctx[1].name + "";
    	let t1;
    	let t2;
    	let td2;
    	let t3_value = /*file*/ ctx[1].modified + "";
    	let t3;
    	let t4;
    	let td3;
    	let t5_value = /*file*/ ctx[1].type + "";
    	let t5;
    	let t6;
    	let td4;
    	let t7_value = (/*file*/ ctx[1].size ?? "") + "";
    	let t7;
    	let t8;

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			img = element("img");
    			t0 = space();
    			td1 = element("td");
    			t1 = text(t1_value);
    			t2 = space();
    			td2 = element("td");
    			t3 = text(t3_value);
    			t4 = space();
    			td3 = element("td");
    			t5 = text(t5_value);
    			t6 = space();
    			td4 = element("td");
    			t7 = text(t7_value);
    			t8 = space();
    			if (img.src !== (img_src_value = "./icons/" + (/*file*/ ctx[1].icon ?? "file") + ".ico")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "" + (/*file*/ ctx[1].icon + " icon"));
    			attr_dev(img, "class", "svelte-1iohb8x");
    			add_location(img, file$1, 206, 40, 17485);
    			attr_dev(td0, "class", "svelte-1iohb8x");
    			add_location(td0, file$1, 205, 36, 17439);
    			attr_dev(td1, "class", "svelte-1iohb8x");
    			add_location(td1, file$1, 208, 36, 17636);
    			attr_dev(td2, "class", "svelte-1iohb8x");
    			add_location(td2, file$1, 209, 36, 17694);
    			attr_dev(td3, "class", "svelte-1iohb8x");
    			add_location(td3, file$1, 210, 36, 17756);
    			attr_dev(td4, "class", "svelte-1iohb8x");
    			add_location(td4, file$1, 211, 36, 17814);
    			attr_dev(tr, "tabindex", "0");
    			attr_dev(tr, "class", "svelte-1iohb8x");
    			add_location(tr, file$1, 204, 32, 17384);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			append_dev(td0, img);
    			append_dev(tr, t0);
    			append_dev(tr, td1);
    			append_dev(td1, t1);
    			append_dev(tr, t2);
    			append_dev(tr, td2);
    			append_dev(td2, t3);
    			append_dev(tr, t4);
    			append_dev(tr, td3);
    			append_dev(td3, t5);
    			append_dev(tr, t6);
    			append_dev(tr, td4);
    			append_dev(td4, t7);
    			append_dev(tr, t8);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$1.name,
    		type: "each",
    		source: "(204:28) {#each files as file}",
    		ctx
    	});

    	return block;
    }

    // (104:8) <Flex id="app-skeleton-splitview">
    function create_default_slot$1(ctx) {
    	let aside;
    	let flex0;
    	let t0;
    	let ul;
    	let li0;
    	let t2;
    	let li1;
    	let t4;
    	let li2;
    	let t6;
    	let main;
    	let header;
    	let nav;
    	let div0;
    	let svg0;
    	let path0;
    	let t7;
    	let t8;
    	let div1;
    	let svg1;
    	let path1;
    	let t9;
    	let t10;
    	let button;
    	let svg2;
    	let path2;
    	let t11;
    	let flex1;
    	let t12;
    	let flex2;
    	let t13;
    	let article;
    	let table;
    	let thead;
    	let tr;
    	let th0;
    	let t14;
    	let th1;
    	let t16;
    	let th2;
    	let t18;
    	let th3;
    	let t20;
    	let th4;
    	let t22;
    	let tbody;
    	let current;

    	flex0 = new Flex({
    			props: {
    				align: "center",
    				id: "app-skeleton-sidebar-header",
    				$$slots: { default: [create_default_slot_3$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	flex1 = new Flex({
    			props: {
    				id: "app-skeleton-navigation-container",
    				$$slots: { default: [create_default_slot_2$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	flex2 = new Flex({
    			props: {
    				id: "app-skeleton-options-container",
    				align: "center",
    				justify: "end",
    				$$slots: { default: [create_default_slot_1$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	let each_value = /*files*/ ctx[0];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			aside = element("aside");
    			create_component(flex0.$$.fragment);
    			t0 = space();
    			ul = element("ul");
    			li0 = element("li");
    			li0.textContent = "test";
    			t2 = space();
    			li1 = element("li");
    			li1.textContent = "test";
    			t4 = space();
    			li2 = element("li");
    			li2.textContent = "test";
    			t6 = space();
    			main = element("main");
    			header = element("header");
    			nav = element("nav");
    			div0 = element("div");
    			svg0 = svg_element("svg");
    			path0 = svg_element("path");
    			t7 = text("\r\n                            Preview");
    			t8 = space();
    			div1 = element("div");
    			svg1 = svg_element("svg");
    			path1 = svg_element("path");
    			t9 = text("\r\n                            New Tab");
    			t10 = space();
    			button = element("button");
    			svg2 = svg_element("svg");
    			path2 = svg_element("path");
    			t11 = space();
    			create_component(flex1.$$.fragment);
    			t12 = space();
    			create_component(flex2.$$.fragment);
    			t13 = space();
    			article = element("article");
    			table = element("table");
    			thead = element("thead");
    			tr = element("tr");
    			th0 = element("th");
    			t14 = space();
    			th1 = element("th");
    			th1.textContent = "Name";
    			t16 = space();
    			th2 = element("th");
    			th2.textContent = "Date Modified";
    			t18 = space();
    			th3 = element("th");
    			th3.textContent = "Type";
    			t20 = space();
    			th4 = element("th");
    			th4.textContent = "Size";
    			t22 = space();
    			tbody = element("tbody");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(li0, "class", "selected svelte-1iohb8x");
    			add_location(li0, file$1, 114, 20, 4275);
    			attr_dev(li1, "class", "svelte-1iohb8x");
    			add_location(li1, file$1, 115, 20, 4327);
    			attr_dev(li2, "class", "svelte-1iohb8x");
    			add_location(li2, file$1, 116, 20, 4362);
    			attr_dev(ul, "class", "app-sidebar-scroller svelte-1iohb8x");
    			add_location(ul, file$1, 113, 16, 4220);
    			attr_dev(aside, "class", "app-sidebar svelte-1iohb8x");
    			add_location(aside, file$1, 104, 12, 2927);
    			attr_dev(path0, "d", "M5.25 3C3.45507 3 2 4.45507 2 6.25V21.75C2 23.5449 3.45507 25 5.25 25H12.01V27.0013L9.01196 27.0013C8.45967 27.0013 8.01196 27.4488 8.01196 28.0007C8.01197 28.5526 8.45969 29 9.01197 29L23.0043 28.9999C23.5565 28.9999 24.0042 28.5525 24.0042 28.0005C24.0042 27.4486 23.5565 27.0012 23.0042 27.0012L20.0059 27.0012V25H26.75C28.5449 25 30 23.5449 30 21.75V6.25C30 4.45507 28.5449 3 26.75 3H5.25ZM18.0059 25V27.0013L14.01 27.0013V25H18.0059ZM4 6.25C4 5.55964 4.55964 5 5.25 5H26.75C27.4404 5 28 5.55964 28 6.25V21.75C28 22.4404 27.4404 23 26.75 23H5.25C4.55964 23 4 22.4404 4 21.75V6.25Z");
    			attr_dev(path0, "fill", "currentColor");
    			attr_dev(path0, "class", "svelte-1iohb8x");
    			add_location(path0, file$1, 124, 32, 4767);
    			attr_dev(svg0, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg0, "width", "32");
    			attr_dev(svg0, "height", "32");
    			attr_dev(svg0, "viewBox", "0 0 32 32");
    			attr_dev(svg0, "fill", "none");
    			attr_dev(svg0, "class", "svelte-1iohb8x");
    			add_location(svg0, file$1, 123, 28, 4638);
    			attr_dev(div0, "class", "tab selected svelte-1iohb8x");
    			add_location(div0, file$1, 122, 24, 4582);
    			attr_dev(path1, "d", "M7 12C7.55228 12 8 11.5523 8 11C8 10.4477 7.55228 10 7 10C6.44772 10 6 10.4477 6 11C6 11.5523 6.44772 12 7 12Z M11 11C11 11.5523 10.5523 12 10 12C9.44772 12 9 11.5523 9 11C9 10.4477 9.44772 10 10 10C10.5523 10 11 10.4477 11 11Z M13 12C13.5523 12 14 11.5523 14 11C14 10.4477 13.5523 10 13 10C12.4477 10 12 10.4477 12 11C12 11.5523 12.4477 12 13 12Z M3 5.5C3 4.11929 4.11929 3 5.5 3H14.5C15.8807 3 17 4.11929 17 5.5V14.5C17 15.8807 15.8807 17 14.5 17H5.5C4.11929 17 3 15.8807 3 14.5V5.5ZM5.5 4C4.67157 4 4 4.67157 4 5.5V14.5C4 15.3284 4.67157 16 5.5 16H14.5C15.3284 16 16 15.3284 16 14.5V7H9.5C8.67157 7 8 6.32843 8 5.5V4H5.5ZM16 5.5C16 4.67157 15.3284 4 14.5 4H9V5.5C9 5.77614 9.22386 6 9.5 6H16V5.5Z");
    			attr_dev(path1, "fill", "currentColor");
    			attr_dev(path1, "class", "svelte-1iohb8x");
    			add_location(path1, file$1, 130, 32, 5690);
    			attr_dev(svg1, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg1, "width", "20");
    			attr_dev(svg1, "height", "20");
    			attr_dev(svg1, "viewBox", "0 0 20 20");
    			attr_dev(svg1, "fill", "none");
    			attr_dev(svg1, "class", "svelte-1iohb8x");
    			add_location(svg1, file$1, 129, 28, 5561);
    			attr_dev(div1, "class", "tab svelte-1iohb8x");
    			add_location(div1, file$1, 128, 24, 5514);
    			attr_dev(path2, "d", "M14.5 13.0001V3.75391C14.5 3.33991 14.164 3.00391 13.75 3.00391C13.336 3.00391 13 3.33991 13 3.75391V13.0001H3.75388C3.33988 13.0001 3.00388 13.3361 3.00388 13.7501C3.00388 14.1641 3.33988 14.5001 3.75388 14.5001H13V23.7525C13 24.1665 13.336 24.5025 13.75 24.5025C14.164 24.5025 14.5 24.1665 14.5 23.7525V14.5001L23.7498 14.5032C24.1638 14.5032 24.4998 14.1672 24.4998 13.7532C24.4998 13.3392 24.1638 13.0032 23.7498 13.0032L14.5 13.0001Z");
    			attr_dev(path2, "fill", "currentColor");
    			attr_dev(path2, "class", "svelte-1iohb8x");
    			add_location(path2, file$1, 136, 32, 6742);
    			attr_dev(svg2, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg2, "width", "28");
    			attr_dev(svg2, "height", "28");
    			attr_dev(svg2, "viewBox", "0 0 28 28");
    			attr_dev(svg2, "fill", "none");
    			attr_dev(svg2, "class", "svelte-1iohb8x");
    			add_location(svg2, file$1, 135, 28, 6613);
    			attr_dev(button, "class", "new-tab-button svelte-1iohb8x");
    			add_location(button, file$1, 134, 24, 6552);
    			attr_dev(nav, "class", "tab-bar svelte-1iohb8x");
    			add_location(nav, file$1, 121, 20, 4535);
    			attr_dev(header, "class", "app-content-header svelte-1iohb8x");
    			add_location(header, file$1, 120, 16, 4478);
    			attr_dev(th0, "class", "svelte-1iohb8x");
    			add_location(th0, file$1, 195, 32, 16991);
    			attr_dev(th1, "class", "svelte-1iohb8x");
    			add_location(th1, file$1, 196, 32, 17034);
    			attr_dev(th2, "class", "svelte-1iohb8x");
    			add_location(th2, file$1, 197, 32, 17081);
    			attr_dev(th3, "class", "svelte-1iohb8x");
    			add_location(th3, file$1, 198, 32, 17137);
    			attr_dev(th4, "class", "svelte-1iohb8x");
    			add_location(th4, file$1, 199, 32, 17184);
    			attr_dev(tr, "class", "svelte-1iohb8x");
    			add_location(tr, file$1, 194, 28, 16953);
    			attr_dev(thead, "class", "svelte-1iohb8x");
    			add_location(thead, file$1, 193, 24, 16916);
    			attr_dev(tbody, "class", "svelte-1iohb8x");
    			add_location(tbody, file$1, 202, 24, 17292);
    			attr_dev(table, "class", "files-table svelte-1iohb8x");
    			add_location(table, file$1, 192, 20, 16863);
    			attr_dev(article, "class", "files-view svelte-1iohb8x");
    			add_location(article, file$1, 191, 16, 16813);
    			attr_dev(main, "class", "app-content svelte-1iohb8x");
    			add_location(main, file$1, 119, 12, 4434);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, aside, anchor);
    			mount_component(flex0, aside, null);
    			append_dev(aside, t0);
    			append_dev(aside, ul);
    			append_dev(ul, li0);
    			append_dev(ul, t2);
    			append_dev(ul, li1);
    			append_dev(ul, t4);
    			append_dev(ul, li2);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, main, anchor);
    			append_dev(main, header);
    			append_dev(header, nav);
    			append_dev(nav, div0);
    			append_dev(div0, svg0);
    			append_dev(svg0, path0);
    			append_dev(div0, t7);
    			append_dev(nav, t8);
    			append_dev(nav, div1);
    			append_dev(div1, svg1);
    			append_dev(svg1, path1);
    			append_dev(div1, t9);
    			append_dev(nav, t10);
    			append_dev(nav, button);
    			append_dev(button, svg2);
    			append_dev(svg2, path2);
    			append_dev(header, t11);
    			mount_component(flex1, header, null);
    			append_dev(header, t12);
    			mount_component(flex2, header, null);
    			append_dev(main, t13);
    			append_dev(main, article);
    			append_dev(article, table);
    			append_dev(table, thead);
    			append_dev(thead, tr);
    			append_dev(tr, th0);
    			append_dev(tr, t14);
    			append_dev(tr, th1);
    			append_dev(tr, t16);
    			append_dev(tr, th2);
    			append_dev(tr, t18);
    			append_dev(tr, th3);
    			append_dev(tr, t20);
    			append_dev(tr, th4);
    			append_dev(table, t22);
    			append_dev(table, tbody);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(tbody, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const flex0_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				flex0_changes.$$scope = { dirty, ctx };
    			}

    			flex0.$set(flex0_changes);
    			const flex1_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				flex1_changes.$$scope = { dirty, ctx };
    			}

    			flex1.$set(flex1_changes);
    			const flex2_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				flex2_changes.$$scope = { dirty, ctx };
    			}

    			flex2.$set(flex2_changes);

    			if (dirty & /*files*/ 1) {
    				each_value = /*files*/ ctx[0];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$1(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block$1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(tbody, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(flex0.$$.fragment, local);
    			transition_in(flex1.$$.fragment, local);
    			transition_in(flex2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(flex0.$$.fragment, local);
    			transition_out(flex1.$$.fragment, local);
    			transition_out(flex2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(aside);
    			destroy_component(flex0);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(main);
    			destroy_component(flex1);
    			destroy_component(flex2);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$1.name,
    		type: "slot",
    		source: "(104:8) <Flex id=\\\"app-skeleton-splitview\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1(ctx) {
    	let div;
    	let flex;
    	let current;

    	flex = new Flex({
    			props: {
    				id: "app-skeleton-splitview",
    				$$slots: { default: [create_default_slot$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(flex.$$.fragment);
    			attr_dev(div, "class", "acrylic-material app-skeleton svelte-1iohb8x");
    			add_location(div, file$1, 102, 4, 2826);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(flex, div, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const flex_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				flex_changes.$$scope = { dirty, ctx };
    			}

    			flex.$set(flex_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(flex.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(flex.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(flex);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("AppSkeleton", slots, []);

    	const files = [
    		{
    			name: ".github",
    			type: "File Folder",
    			icon: "folder",
    			modified: "17 days ago"
    		},
    		{
    			name: "Common",
    			type: "File Folder",
    			icon: "folder",
    			modified: "last month"
    		},
    		{
    			name: "Files.Launcher",
    			type: "File Folder",
    			icon: "folder",
    			modified: "3 days ago"
    		},
    		{
    			name: "Files.Package",
    			type: "File Folder",
    			icon: "folder",
    			modified: "2 months ago"
    		},
    		{
    			name: "Files",
    			type: "File Folder",
    			icon: "folder",
    			modified: "yesterday"
    		},
    		{
    			name: "builds",
    			type: "File Folder",
    			icon: "folder",
    			modified: "25 days ago"
    		},
    		{
    			name: ".gitattributes",
    			type: "GITATTRIBUTES File",
    			icon: "file",
    			modified: "3 years ago",
    			size: "2.46 KB"
    		},
    		{
    			name: ".gitignore",
    			type: "GITIGNORE File",
    			icon: "file",
    			modified: "3 months ago",
    			size: "5.47 KB"
    		},
    		{
    			name: "CODE_OF_CONDUCT.md",
    			type: "MD File",
    			icon: "text",
    			modified: "2 months ago",
    			size: "6.16 KB"
    		},
    		{
    			name: "Files.sln",
    			type: "Visual Studio Solution",
    			icon: "file",
    			modified: "2 months ago",
    			size: "8.7 KB"
    		},
    		{
    			name: "LICENSE",
    			type: "File",
    			icon: "file",
    			modified: "5 months ago",
    			size: "34.3 KB"
    		},
    		{
    			name: "Privacy.md",
    			type: "MD File",
    			icon: "text",
    			modified: "5 months ago",
    			size: "332 B"
    		},
    		{
    			name: "README.md",
    			type: "MD File",
    			icon: "text",
    			modified: "25 days ago",
    			size: "2.28 KB"
    		}
    	];

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<AppSkeleton> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Flex, files });
    	return [files];
    }

    class AppSkeleton extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "AppSkeleton",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    /* src\App.svelte generated by Svelte v3.38.2 */

    const { console: console_1 } = globals;
    const file = "src\\App.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[9] = list[i];
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[9] = list[i];
    	return child_ctx;
    }

    function get_each_context_2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[9] = list[i];
    	return child_ctx;
    }

    // (102:20) <Title>
    function create_default_slot_16(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Files");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_16.name,
    		type: "slot",
    		source: "(102:20) <Title>",
    		ctx
    	});

    	return block;
    }

    // (103:20) <Subtext>
    function create_default_slot_15(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("A modern file explorer that pushes the boundaries of the platform.");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_15.name,
    		type: "slot",
    		source: "(103:20) <Subtext>",
    		ctx
    	});

    	return block;
    }

    // (110:32) <Flex direction="column">
    function create_default_slot_14(ctx) {
    	let span0;
    	let t0;
    	let t1;
    	let t2;
    	let span1;

    	const block = {
    		c: function create() {
    			span0 = element("span");
    			t0 = text("Download ");
    			t1 = text(/*version*/ ctx[1]);
    			t2 = space();
    			span1 = element("span");
    			span1.textContent = "Microsoft Store";
    			attr_dev(span0, "class", "button-title");
    			add_location(span0, file, 110, 36, 4842);
    			attr_dev(span1, "class", "button-description");
    			add_location(span1, file, 111, 36, 4931);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span0, anchor);
    			append_dev(span0, t0);
    			append_dev(span0, t1);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, span1, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*version*/ 2) set_data_dev(t1, /*version*/ ctx[1]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span0);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(span1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_14.name,
    		type: "slot",
    		source: "(110:32) <Flex direction=\\\"column\\\">",
    		ctx
    	});

    	return block;
    }

    // (106:28) <Flex gap align="center">
    function create_default_slot_13(ctx) {
    	let svg;
    	let path;
    	let t;
    	let flex;
    	let current;

    	flex = new Flex({
    			props: {
    				direction: "column",
    				$$slots: { default: [create_default_slot_14] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			t = space();
    			create_component(flex.$$.fragment);
    			attr_dev(path, "d", "M12.25 38.5H35.75C36.7165 38.5 37.5 39.2835 37.5 40.25C37.5 41.1682 36.7929 41.9212 35.8935 41.9942L35.75 42H12.25C11.2835 42 10.5 41.2165 10.5 40.25C10.5 39.3318 11.2071 38.5788 12.1065 38.5058L12.25 38.5H35.75H12.25ZM23.6065 6.2558L23.75 6.25C24.6682 6.25 25.4212 6.95711 25.4942 7.85647L25.5 8V29.333L30.2931 24.5407C30.9765 23.8573 32.0846 23.8573 32.768 24.5407C33.4514 25.2242 33.4514 26.3322 32.768 27.0156L24.9898 34.7938C24.3064 35.4772 23.1984 35.4772 22.515 34.7938L14.7368 27.0156C14.0534 26.3322 14.0534 25.2242 14.7368 24.5407C15.4202 23.8573 16.5282 23.8573 17.2117 24.5407L22 29.329V8C22 7.08183 22.7071 6.32881 23.6065 6.2558L23.75 6.25L23.6065 6.2558Z");
    			attr_dev(path, "fill", "currentColor");
    			add_location(path, file, 107, 36, 4007);
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg, "width", "20");
    			attr_dev(svg, "height", "20");
    			attr_dev(svg, "viewBox", "0 0 48 48");
    			attr_dev(svg, "fill", "none");
    			add_location(svg, file, 106, 32, 3875);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, path);
    			insert_dev(target, t, anchor);
    			mount_component(flex, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const flex_changes = {};

    			if (dirty & /*$$scope, version*/ 65538) {
    				flex_changes.$$scope = { dirty, ctx };
    			}

    			flex.$set(flex_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(flex.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(flex.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    			if (detaching) detach_dev(t);
    			destroy_component(flex, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_13.name,
    		type: "slot",
    		source: "(106:28) <Flex gap align=\\\"center\\\">",
    		ctx
    	});

    	return block;
    }

    // (105:24) <Button type="primary" href={`ms-windows-store://pdp/?ProductId=${$storeId}`} custom>
    function create_default_slot_12(ctx) {
    	let flex;
    	let current;

    	flex = new Flex({
    			props: {
    				gap: true,
    				align: "center",
    				$$slots: { default: [create_default_slot_13] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(flex.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(flex, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const flex_changes = {};

    			if (dirty & /*$$scope, version*/ 65538) {
    				flex_changes.$$scope = { dirty, ctx };
    			}

    			flex.$set(flex_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(flex.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(flex.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(flex, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_12.name,
    		type: "slot",
    		source: "(105:24) <Button type=\\\"primary\\\" href={`ms-windows-store://pdp/?ProductId=${$storeId}`} custom>",
    		ctx
    	});

    	return block;
    }

    // (121:32) <Flex direction="column">
    function create_default_slot_11(ctx) {
    	let span0;
    	let t1;
    	let span1;

    	const block = {
    		c: function create() {
    			span0 = element("span");
    			span0.textContent = "GitHub";
    			t1 = space();
    			span1 = element("span");
    			span1.textContent = "Files is open source!";
    			attr_dev(span0, "class", "button-title");
    			add_location(span0, file, 121, 36, 6165);
    			attr_dev(span1, "class", "button-description");
    			add_location(span1, file, 122, 36, 6242);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, span1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(span1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_11.name,
    		type: "slot",
    		source: "(121:32) <Flex direction=\\\"column\\\">",
    		ctx
    	});

    	return block;
    }

    // (117:28) <Flex gap align="center">
    function create_default_slot_10(ctx) {
    	let svg;
    	let path;
    	let t;
    	let flex;
    	let current;

    	flex = new Flex({
    			props: {
    				direction: "column",
    				$$slots: { default: [create_default_slot_11] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			t = space();
    			create_component(flex.$$.fragment);
    			attr_dev(path, "fill-rule", "evenodd");
    			attr_dev(path, "fill", "currentColor");
    			attr_dev(path, "d", "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z");
    			add_location(path, file, 118, 36, 5405);
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg, "viewBox", "0 0 16 16");
    			attr_dev(svg, "width", "18");
    			attr_dev(svg, "height", "18");
    			add_location(svg, file, 117, 32, 5285);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, path);
    			insert_dev(target, t, anchor);
    			mount_component(flex, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const flex_changes = {};

    			if (dirty & /*$$scope*/ 65536) {
    				flex_changes.$$scope = { dirty, ctx };
    			}

    			flex.$set(flex_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(flex.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(flex.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    			if (detaching) detach_dev(t);
    			destroy_component(flex, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_10.name,
    		type: "slot",
    		source: "(117:28) <Flex gap align=\\\"center\\\">",
    		ctx
    	});

    	return block;
    }

    // (116:24) <Button href={`https://github.com/${$org}/${$repo}/`} target="_blank" custom>
    function create_default_slot_9(ctx) {
    	let flex;
    	let current;

    	flex = new Flex({
    			props: {
    				gap: true,
    				align: "center",
    				$$slots: { default: [create_default_slot_10] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(flex.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(flex, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const flex_changes = {};

    			if (dirty & /*$$scope*/ 65536) {
    				flex_changes.$$scope = { dirty, ctx };
    			}

    			flex.$set(flex_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(flex.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(flex.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(flex, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_9.name,
    		type: "slot",
    		source: "(116:24) <Button href={`https://github.com/${$org}/${$repo}/`} target=\\\"_blank\\\" custom>",
    		ctx
    	});

    	return block;
    }

    // (104:20) <Flex id="hero-button-container" gap wrap>
    function create_default_slot_8(ctx) {
    	let button0;
    	let t;
    	let button1;
    	let current;

    	button0 = new Button({
    			props: {
    				type: "primary",
    				href: `ms-windows-store://pdp/?ProductId=${/*$storeId*/ ctx[7]}`,
    				custom: true,
    				$$slots: { default: [create_default_slot_12] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button1 = new Button({
    			props: {
    				href: `https://github.com/${/*$org*/ ctx[5]}/${/*$repo*/ ctx[6]}/`,
    				target: "_blank",
    				custom: true,
    				$$slots: { default: [create_default_slot_9] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(button0.$$.fragment);
    			t = space();
    			create_component(button1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(button0, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(button1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const button0_changes = {};
    			if (dirty & /*$storeId*/ 128) button0_changes.href = `ms-windows-store://pdp/?ProductId=${/*$storeId*/ ctx[7]}`;

    			if (dirty & /*$$scope, version*/ 65538) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			const button1_changes = {};
    			if (dirty & /*$org, $repo*/ 96) button1_changes.href = `https://github.com/${/*$org*/ ctx[5]}/${/*$repo*/ ctx[6]}/`;

    			if (dirty & /*$$scope*/ 65536) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button0.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button0.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(button0, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(button1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_8.name,
    		type: "slot",
    		source: "(104:20) <Flex id=\\\"hero-button-container\\\" gap wrap>",
    		ctx
    	});

    	return block;
    }

    // (101:16) <Flex direction="column" id="hero-left-container">
    function create_default_slot_7(ctx) {
    	let title;
    	let t0;
    	let subtext;
    	let t1;
    	let flex;
    	let current;

    	title = new Title({
    			props: {
    				$$slots: { default: [create_default_slot_16] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	subtext = new Subtext({
    			props: {
    				$$slots: { default: [create_default_slot_15] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	flex = new Flex({
    			props: {
    				id: "hero-button-container",
    				gap: true,
    				wrap: true,
    				$$slots: { default: [create_default_slot_8] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(title.$$.fragment);
    			t0 = space();
    			create_component(subtext.$$.fragment);
    			t1 = space();
    			create_component(flex.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(title, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(subtext, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(flex, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const title_changes = {};

    			if (dirty & /*$$scope*/ 65536) {
    				title_changes.$$scope = { dirty, ctx };
    			}

    			title.$set(title_changes);
    			const subtext_changes = {};

    			if (dirty & /*$$scope*/ 65536) {
    				subtext_changes.$$scope = { dirty, ctx };
    			}

    			subtext.$set(subtext_changes);
    			const flex_changes = {};

    			if (dirty & /*$$scope, $org, $repo, $storeId, version*/ 65762) {
    				flex_changes.$$scope = { dirty, ctx };
    			}

    			flex.$set(flex_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(title.$$.fragment, local);
    			transition_in(subtext.$$.fragment, local);
    			transition_in(flex.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(title.$$.fragment, local);
    			transition_out(subtext.$$.fragment, local);
    			transition_out(flex.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(title, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(subtext, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(flex, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_7.name,
    		type: "slot",
    		source: "(101:16) <Flex direction=\\\"column\\\" id=\\\"hero-left-container\\\">",
    		ctx
    	});

    	return block;
    }

    // (100:12) <Flex id="hero-inner-container" align="center" gap>
    function create_default_slot_6(ctx) {
    	let flex;
    	let t;
    	let appskeleton;
    	let current;

    	flex = new Flex({
    			props: {
    				direction: "column",
    				id: "hero-left-container",
    				$$slots: { default: [create_default_slot_7] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	appskeleton = new AppSkeleton({ $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(flex.$$.fragment);
    			t = space();
    			create_component(appskeleton.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(flex, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(appskeleton, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const flex_changes = {};

    			if (dirty & /*$$scope, $org, $repo, $storeId, version*/ 65762) {
    				flex_changes.$$scope = { dirty, ctx };
    			}

    			flex.$set(flex_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(flex.$$.fragment, local);
    			transition_in(appskeleton.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(flex.$$.fragment, local);
    			transition_out(appskeleton.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(flex, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(appskeleton, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6.name,
    		type: "slot",
    		source: "(100:12) <Flex id=\\\"hero-inner-container\\\" align=\\\"center\\\" gap>",
    		ctx
    	});

    	return block;
    }

    // (78:4) <PageSection id="hero-section">
    function create_default_slot_5(ctx) {
    	let navbar;
    	let t0;
    	let flex;
    	let t1;
    	let canvas_1;
    	let current;

    	navbar = new Navbar({
    			props: {
    				selectedItem: 0,
    				items: [
    					{ name: "Home", href: "/" },
    					{ name: "Docs", href: "/", external: true },
    					{
    						name: "Discord",
    						href: "/",
    						external: true
    					},
    					{
    						name: "GitHub",
    						href: "/",
    						external: true
    					}
    				]
    			},
    			$$inline: true
    		});

    	flex = new Flex({
    			props: {
    				id: "hero-inner-container",
    				align: "center",
    				gap: true,
    				$$slots: { default: [create_default_slot_6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(navbar.$$.fragment);
    			t0 = space();
    			create_component(flex.$$.fragment);
    			t1 = space();
    			canvas_1 = element("canvas");
    			attr_dev(canvas_1, "width", "32");
    			attr_dev(canvas_1, "height", "32");
    			attr_dev(canvas_1, "id", "background-canvas");
    			attr_dev(canvas_1, "class", "svelte-fwkjh4");
    			add_location(canvas_1, file, 130, 12, 6529);
    		},
    		m: function mount(target, anchor) {
    			mount_component(navbar, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(flex, target, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, canvas_1, anchor);
    			/*canvas_1_binding*/ ctx[8](canvas_1);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const flex_changes = {};

    			if (dirty & /*$$scope, $org, $repo, $storeId, version*/ 65762) {
    				flex_changes.$$scope = { dirty, ctx };
    			}

    			flex.$set(flex_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navbar.$$.fragment, local);
    			transition_in(flex.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navbar.$$.fragment, local);
    			transition_out(flex.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(navbar, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(flex, detaching);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(canvas_1);
    			/*canvas_1_binding*/ ctx[8](null);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5.name,
    		type: "slot",
    		source: "(78:4) <PageSection id=\\\"hero-section\\\">",
    		ctx
    	});

    	return block;
    }

    // (135:12) <Title size={3} center>
    function create_default_slot_4(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Community Driven");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4.name,
    		type: "slot",
    		source: "(135:12) <Title size={3} center>",
    		ctx
    	});

    	return block;
    }

    // (137:25) <Anchor href="https://github.com/files-community/Files/blob/main/LICENSE" target="_blank">
    function create_default_slot_3(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("free and open source");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3.name,
    		type: "slot",
    		source: "(137:25) <Anchor href=\\\"https://github.com/files-community/Files/blob/main/LICENSE\\\" target=\\\"_blank\\\">",
    		ctx
    	});

    	return block;
    }

    // (136:12) <Subtext center>
    function create_default_slot_2(ctx) {
    	let t0;
    	let anchor;
    	let t1;
    	let current;

    	anchor = new Anchor({
    			props: {
    				href: "https://github.com/files-community/Files/blob/main/LICENSE",
    				target: "_blank",
    				$$slots: { default: [create_default_slot_3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			t0 = text("Files is ");
    			create_component(anchor.$$.fragment);
    			t1 = text(" software maintained and designed by the community.");
    		},
    		m: function mount(target, anchor$1) {
    			insert_dev(target, t0, anchor$1);
    			mount_component(anchor, target, anchor$1);
    			insert_dev(target, t1, anchor$1);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const anchor_changes = {};

    			if (dirty & /*$$scope*/ 65536) {
    				anchor_changes.$$scope = { dirty, ctx };
    			}

    			anchor.$set(anchor_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(anchor.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(anchor.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t0);
    			destroy_component(anchor, detaching);
    			if (detaching) detach_dev(t1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2.name,
    		type: "slot",
    		source: "(136:12) <Subtext center>",
    		ctx
    	});

    	return block;
    }

    // (142:24) {#if !contributor.login.endsWith('[bot]')}
    function create_if_block_2(ctx) {
    	let div1;
    	let img;
    	let img_src_value;
    	let img_alt_value;
    	let t0;
    	let div0;
    	let h5;
    	let t1_value = /*contributor*/ ctx[9].login + "";
    	let t1;
    	let t2;
    	let span;
    	let t3_value = /*contributor*/ ctx[9].contributions + "";
    	let t3;
    	let t4;

    	let t5_value = (/*contributor*/ ctx[9].contributions > 1
    	? "Contributions"
    	: "Contribution") + "";

    	let t5;
    	let t6;

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			img = element("img");
    			t0 = space();
    			div0 = element("div");
    			h5 = element("h5");
    			t1 = text(t1_value);
    			t2 = space();
    			span = element("span");
    			t3 = text(t3_value);
    			t4 = space();
    			t5 = text(t5_value);
    			t6 = space();
    			attr_dev(img, "class", "contributor-avatar svelte-fwkjh4");
    			if (img.src !== (img_src_value = /*contributor*/ ctx[9].avatar_url)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", img_alt_value = "" + (/*contributor*/ ctx[9].login + " avatar"));
    			add_location(img, file, 143, 32, 7378);
    			attr_dev(h5, "class", "svelte-fwkjh4");
    			add_location(h5, file, 145, 36, 7573);
    			add_location(span, file, 146, 36, 7638);
    			attr_dev(div0, "class", "contributor-info svelte-fwkjh4");
    			add_location(div0, file, 144, 32, 7506);
    			attr_dev(div1, "class", "contributor-card svelte-fwkjh4");
    			add_location(div1, file, 142, 28, 7315);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, img);
    			append_dev(div1, t0);
    			append_dev(div1, div0);
    			append_dev(div0, h5);
    			append_dev(h5, t1);
    			append_dev(div0, t2);
    			append_dev(div0, span);
    			append_dev(span, t3);
    			append_dev(span, t4);
    			append_dev(span, t5);
    			append_dev(div1, t6);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*contributors1*/ 4 && img.src !== (img_src_value = /*contributor*/ ctx[9].avatar_url)) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (dirty & /*contributors1*/ 4 && img_alt_value !== (img_alt_value = "" + (/*contributor*/ ctx[9].login + " avatar"))) {
    				attr_dev(img, "alt", img_alt_value);
    			}

    			if (dirty & /*contributors1*/ 4 && t1_value !== (t1_value = /*contributor*/ ctx[9].login + "")) set_data_dev(t1, t1_value);
    			if (dirty & /*contributors1*/ 4 && t3_value !== (t3_value = /*contributor*/ ctx[9].contributions + "")) set_data_dev(t3, t3_value);

    			if (dirty & /*contributors1*/ 4 && t5_value !== (t5_value = (/*contributor*/ ctx[9].contributions > 1
    			? "Contributions"
    			: "Contribution") + "")) set_data_dev(t5, t5_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2.name,
    		type: "if",
    		source: "(142:24) {#if !contributor.login.endsWith('[bot]')}",
    		ctx
    	});

    	return block;
    }

    // (141:20) {#each contributors1 as contributor}
    function create_each_block_2(ctx) {
    	let show_if = !/*contributor*/ ctx[9].login.endsWith("[bot]");
    	let if_block_anchor;
    	let if_block = show_if && create_if_block_2(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*contributors1*/ 4) show_if = !/*contributor*/ ctx[9].login.endsWith("[bot]");

    			if (show_if) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block_2(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_2.name,
    		type: "each",
    		source: "(141:20) {#each contributors1 as contributor}",
    		ctx
    	});

    	return block;
    }

    // (155:24) {#if !contributor.login.endsWith('[bot]')}
    function create_if_block_1(ctx) {
    	let div1;
    	let img;
    	let img_src_value;
    	let img_alt_value;
    	let t0;
    	let div0;
    	let h5;
    	let t1_value = /*contributor*/ ctx[9].login + "";
    	let t1;
    	let t2;
    	let span;
    	let t3_value = /*contributor*/ ctx[9].contributions + "";
    	let t3;
    	let t4;

    	let t5_value = (/*contributor*/ ctx[9].contributions > 1
    	? "Contributions"
    	: "Contribution") + "";

    	let t5;
    	let t6;

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			img = element("img");
    			t0 = space();
    			div0 = element("div");
    			h5 = element("h5");
    			t1 = text(t1_value);
    			t2 = space();
    			span = element("span");
    			t3 = text(t3_value);
    			t4 = space();
    			t5 = text(t5_value);
    			t6 = space();
    			attr_dev(img, "class", "contributor-avatar svelte-fwkjh4");
    			if (img.src !== (img_src_value = /*contributor*/ ctx[9].avatar_url)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", img_alt_value = "" + (/*contributor*/ ctx[9].login + " avatar"));
    			add_location(img, file, 156, 32, 8165);
    			attr_dev(h5, "class", "svelte-fwkjh4");
    			add_location(h5, file, 158, 36, 8360);
    			add_location(span, file, 159, 36, 8425);
    			attr_dev(div0, "class", "contributor-info svelte-fwkjh4");
    			add_location(div0, file, 157, 32, 8293);
    			attr_dev(div1, "class", "contributor-card svelte-fwkjh4");
    			add_location(div1, file, 155, 28, 8102);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, img);
    			append_dev(div1, t0);
    			append_dev(div1, div0);
    			append_dev(div0, h5);
    			append_dev(h5, t1);
    			append_dev(div0, t2);
    			append_dev(div0, span);
    			append_dev(span, t3);
    			append_dev(span, t4);
    			append_dev(span, t5);
    			append_dev(div1, t6);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*contributors2*/ 8 && img.src !== (img_src_value = /*contributor*/ ctx[9].avatar_url)) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (dirty & /*contributors2*/ 8 && img_alt_value !== (img_alt_value = "" + (/*contributor*/ ctx[9].login + " avatar"))) {
    				attr_dev(img, "alt", img_alt_value);
    			}

    			if (dirty & /*contributors2*/ 8 && t1_value !== (t1_value = /*contributor*/ ctx[9].login + "")) set_data_dev(t1, t1_value);
    			if (dirty & /*contributors2*/ 8 && t3_value !== (t3_value = /*contributor*/ ctx[9].contributions + "")) set_data_dev(t3, t3_value);

    			if (dirty & /*contributors2*/ 8 && t5_value !== (t5_value = (/*contributor*/ ctx[9].contributions > 1
    			? "Contributions"
    			: "Contribution") + "")) set_data_dev(t5, t5_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(155:24) {#if !contributor.login.endsWith('[bot]')}",
    		ctx
    	});

    	return block;
    }

    // (154:20) {#each contributors2 as contributor}
    function create_each_block_1(ctx) {
    	let show_if = !/*contributor*/ ctx[9].login.endsWith("[bot]");
    	let if_block_anchor;
    	let if_block = show_if && create_if_block_1(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*contributors2*/ 8) show_if = !/*contributor*/ ctx[9].login.endsWith("[bot]");

    			if (show_if) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block_1(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(154:20) {#each contributors2 as contributor}",
    		ctx
    	});

    	return block;
    }

    // (168:24) {#if !contributor.login.endsWith('[bot]')}
    function create_if_block(ctx) {
    	let div1;
    	let img;
    	let img_src_value;
    	let img_alt_value;
    	let t0;
    	let div0;
    	let h5;
    	let t1_value = /*contributor*/ ctx[9].login + "";
    	let t1;
    	let t2;
    	let span;
    	let t3_value = /*contributor*/ ctx[9].contributions + "";
    	let t3;
    	let t4;

    	let t5_value = (/*contributor*/ ctx[9].contributions > 1
    	? "Contributions"
    	: "Contribution") + "";

    	let t5;
    	let t6;

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			img = element("img");
    			t0 = space();
    			div0 = element("div");
    			h5 = element("h5");
    			t1 = text(t1_value);
    			t2 = space();
    			span = element("span");
    			t3 = text(t3_value);
    			t4 = space();
    			t5 = text(t5_value);
    			t6 = space();
    			attr_dev(img, "class", "contributor-avatar svelte-fwkjh4");
    			if (img.src !== (img_src_value = /*contributor*/ ctx[9].avatar_url)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", img_alt_value = "" + (/*contributor*/ ctx[9].login + " avatar"));
    			add_location(img, file, 169, 32, 8952);
    			attr_dev(h5, "class", "svelte-fwkjh4");
    			add_location(h5, file, 171, 36, 9147);
    			add_location(span, file, 172, 36, 9212);
    			attr_dev(div0, "class", "contributor-info svelte-fwkjh4");
    			add_location(div0, file, 170, 32, 9080);
    			attr_dev(div1, "class", "contributor-card svelte-fwkjh4");
    			add_location(div1, file, 168, 28, 8889);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, img);
    			append_dev(div1, t0);
    			append_dev(div1, div0);
    			append_dev(div0, h5);
    			append_dev(h5, t1);
    			append_dev(div0, t2);
    			append_dev(div0, span);
    			append_dev(span, t3);
    			append_dev(span, t4);
    			append_dev(span, t5);
    			append_dev(div1, t6);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*contributors3*/ 16 && img.src !== (img_src_value = /*contributor*/ ctx[9].avatar_url)) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (dirty & /*contributors3*/ 16 && img_alt_value !== (img_alt_value = "" + (/*contributor*/ ctx[9].login + " avatar"))) {
    				attr_dev(img, "alt", img_alt_value);
    			}

    			if (dirty & /*contributors3*/ 16 && t1_value !== (t1_value = /*contributor*/ ctx[9].login + "")) set_data_dev(t1, t1_value);
    			if (dirty & /*contributors3*/ 16 && t3_value !== (t3_value = /*contributor*/ ctx[9].contributions + "")) set_data_dev(t3, t3_value);

    			if (dirty & /*contributors3*/ 16 && t5_value !== (t5_value = (/*contributor*/ ctx[9].contributions > 1
    			? "Contributions"
    			: "Contribution") + "")) set_data_dev(t5, t5_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(168:24) {#if !contributor.login.endsWith('[bot]')}",
    		ctx
    	});

    	return block;
    }

    // (167:20) {#each contributors3 as contributor}
    function create_each_block(ctx) {
    	let show_if = !/*contributor*/ ctx[9].login.endsWith("[bot]");
    	let if_block_anchor;
    	let if_block = show_if && create_if_block(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*contributors3*/ 16) show_if = !/*contributor*/ ctx[9].login.endsWith("[bot]");

    			if (show_if) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(167:20) {#each contributors3 as contributor}",
    		ctx
    	});

    	return block;
    }

    // (134:8) <Flex id="community-section-inner" align="center" justify="center" direction="column">
    function create_default_slot_1(ctx) {
    	let title;
    	let t0;
    	let subtext;
    	let t1;
    	let div3;
    	let div0;
    	let t2;
    	let div1;
    	let t3;
    	let div2;
    	let current;

    	title = new Title({
    			props: {
    				size: 3,
    				center: true,
    				$$slots: { default: [create_default_slot_4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	subtext = new Subtext({
    			props: {
    				center: true,
    				$$slots: { default: [create_default_slot_2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	let each_value_2 = /*contributors1*/ ctx[2];
    	validate_each_argument(each_value_2);
    	let each_blocks_2 = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks_2[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
    	}

    	let each_value_1 = /*contributors2*/ ctx[3];
    	validate_each_argument(each_value_1);
    	let each_blocks_1 = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	let each_value = /*contributors3*/ ctx[4];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			create_component(title.$$.fragment);
    			t0 = space();
    			create_component(subtext.$$.fragment);
    			t1 = space();
    			div3 = element("div");
    			div0 = element("div");

    			for (let i = 0; i < each_blocks_2.length; i += 1) {
    				each_blocks_2[i].c();
    			}

    			t2 = space();
    			div1 = element("div");

    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].c();
    			}

    			t3 = space();
    			div2 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(div0, "class", "contributors-row svelte-fwkjh4");
    			add_location(div0, file, 139, 16, 7132);
    			attr_dev(div1, "class", "contributors-row svelte-fwkjh4");
    			add_location(div1, file, 152, 16, 7919);
    			attr_dev(div2, "class", "contributors-row svelte-fwkjh4");
    			add_location(div2, file, 165, 16, 8706);
    			attr_dev(div3, "class", "contributors-container svelte-fwkjh4");
    			add_location(div3, file, 138, 12, 7079);
    		},
    		m: function mount(target, anchor) {
    			mount_component(title, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(subtext, target, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div3, anchor);
    			append_dev(div3, div0);

    			for (let i = 0; i < each_blocks_2.length; i += 1) {
    				each_blocks_2[i].m(div0, null);
    			}

    			append_dev(div3, t2);
    			append_dev(div3, div1);

    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].m(div1, null);
    			}

    			append_dev(div3, t3);
    			append_dev(div3, div2);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div2, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const title_changes = {};

    			if (dirty & /*$$scope*/ 65536) {
    				title_changes.$$scope = { dirty, ctx };
    			}

    			title.$set(title_changes);
    			const subtext_changes = {};

    			if (dirty & /*$$scope*/ 65536) {
    				subtext_changes.$$scope = { dirty, ctx };
    			}

    			subtext.$set(subtext_changes);

    			if (dirty & /*contributors1*/ 4) {
    				each_value_2 = /*contributors1*/ ctx[2];
    				validate_each_argument(each_value_2);
    				let i;

    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2(ctx, each_value_2, i);

    					if (each_blocks_2[i]) {
    						each_blocks_2[i].p(child_ctx, dirty);
    					} else {
    						each_blocks_2[i] = create_each_block_2(child_ctx);
    						each_blocks_2[i].c();
    						each_blocks_2[i].m(div0, null);
    					}
    				}

    				for (; i < each_blocks_2.length; i += 1) {
    					each_blocks_2[i].d(1);
    				}

    				each_blocks_2.length = each_value_2.length;
    			}

    			if (dirty & /*contributors2*/ 8) {
    				each_value_1 = /*contributors2*/ ctx[3];
    				validate_each_argument(each_value_1);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks_1[i]) {
    						each_blocks_1[i].p(child_ctx, dirty);
    					} else {
    						each_blocks_1[i] = create_each_block_1(child_ctx);
    						each_blocks_1[i].c();
    						each_blocks_1[i].m(div1, null);
    					}
    				}

    				for (; i < each_blocks_1.length; i += 1) {
    					each_blocks_1[i].d(1);
    				}

    				each_blocks_1.length = each_value_1.length;
    			}

    			if (dirty & /*contributors3*/ 16) {
    				each_value = /*contributors3*/ ctx[4];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div2, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(title.$$.fragment, local);
    			transition_in(subtext.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(title.$$.fragment, local);
    			transition_out(subtext.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(title, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(subtext, detaching);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div3);
    			destroy_each(each_blocks_2, detaching);
    			destroy_each(each_blocks_1, detaching);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1.name,
    		type: "slot",
    		source: "(134:8) <Flex id=\\\"community-section-inner\\\" align=\\\"center\\\" justify=\\\"center\\\" direction=\\\"column\\\">",
    		ctx
    	});

    	return block;
    }

    // (133:4) <PageSection id="community-section">
    function create_default_slot(ctx) {
    	let flex;
    	let current;

    	flex = new Flex({
    			props: {
    				id: "community-section-inner",
    				align: "center",
    				justify: "center",
    				direction: "column",
    				$$slots: { default: [create_default_slot_1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(flex.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(flex, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const flex_changes = {};

    			if (dirty & /*$$scope, contributors3, contributors2, contributors1*/ 65564) {
    				flex_changes.$$scope = { dirty, ctx };
    			}

    			flex.$set(flex_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(flex.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(flex.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(flex, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot.name,
    		type: "slot",
    		source: "(133:4) <PageSection id=\\\"community-section\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment(ctx) {
    	let pagesection0;
    	let t;
    	let pagesection1;
    	let current;

    	pagesection0 = new PageSection({
    			props: {
    				id: "hero-section",
    				$$slots: { default: [create_default_slot_5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pagesection1 = new PageSection({
    			props: {
    				id: "community-section",
    				$$slots: { default: [create_default_slot] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(pagesection0.$$.fragment);
    			t = space();
    			create_component(pagesection1.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(pagesection0, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(pagesection1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const pagesection0_changes = {};

    			if (dirty & /*$$scope, canvas, $org, $repo, $storeId, version*/ 65763) {
    				pagesection0_changes.$$scope = { dirty, ctx };
    			}

    			pagesection0.$set(pagesection0_changes);
    			const pagesection1_changes = {};

    			if (dirty & /*$$scope, contributors3, contributors2, contributors1*/ 65564) {
    				pagesection1_changes.$$scope = { dirty, ctx };
    			}

    			pagesection1.$set(pagesection1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(pagesection0.$$.fragment, local);
    			transition_in(pagesection1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(pagesection0.$$.fragment, local);
    			transition_out(pagesection1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(pagesection0, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(pagesection1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    async function getReleaseVersion(endpoint) {
    	return await fetch(endpoint).then(result => result.json()).then(result => {
    		if (result) return result.tag_name;
    	}).catch(err => {
    		console.error(err);
    		return "";
    	});
    }

    async function getContributors(endpoint) {
    	return await fetch(endpoint).then(result => result.json()).then(result => {
    		return result;
    	}).catch(err => {
    		console.error(err);
    		return "";
    	});
    }

    function instance($$self, $$props, $$invalidate) {
    	let $org;
    	let $repo;
    	let $storeId;
    	validate_store(org, "org");
    	component_subscribe($$self, org, $$value => $$invalidate(5, $org = $$value));
    	validate_store(repo, "repo");
    	component_subscribe($$self, repo, $$value => $$invalidate(6, $repo = $$value));
    	validate_store(storeId, "storeId");
    	component_subscribe($$self, storeId, $$value => $$invalidate(7, $storeId = $$value));
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("App", slots, []);
    	let canvas;
    	let version = "";
    	let contributors1 = [];
    	let contributors2 = [];
    	let contributors3 = [];

    	onMount(async () => {
    		// temporary thing to test theming. once a proper theme system is added this can be removed
    		document.body.className = "theme-light";

    		// Canvas
    		let time = 0;

    		const context = canvas.getContext("2d");

    		const getColor = (x, y, r, g, b) => {
    			context.fillStyle = `rgb(${r}, ${g}, ${b})`;
    			context.fillRect(x, y, 1, 1);
    		};

    		const red = (x, y, t) => {
    			return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
    		};

    		const green = (x, y, t) => {
    			return Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300));
    		};

    		const blue = (x, y, t) => {
    			return Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100));
    		};

    		let run = () => {
    			for (let x = 0; x <= 35; x++) {
    				for (let y = 0; y <= 35; y++) {
    					getColor(x, y, red(x, y, time), green(x, y, time), blue(x, y, time));
    				}
    			}

    			time += 0.05;
    			window.requestAnimationFrame(run);
    		};

    		run();

    		// Fetch our release version
    		$$invalidate(1, version = await getReleaseVersion(`https://api.github.com/repos/${$org}/${$repo}/releases/latest`));

    		// Fetch contributors
    		const contributorsEndpoint = `https://api.github.com/repos/${$org}/${$repo}/contributors?per_page=35`;

    		$$invalidate(2, contributors1 = await getContributors(`${contributorsEndpoint}&page=1`));
    		$$invalidate(3, contributors2 = await getContributors(`${contributorsEndpoint}&page=2`));
    		$$invalidate(4, contributors3 = await getContributors(`${contributorsEndpoint}&page=3`));
    	});

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	function canvas_1_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			canvas = $$value;
    			$$invalidate(0, canvas);
    		});
    	}

    	$$self.$capture_state = () => ({
    		onMount,
    		org,
    		repo,
    		storeId,
    		Title,
    		Subtext,
    		Anchor,
    		Flex,
    		Button,
    		PageSection,
    		Navbar,
    		AppSkeleton,
    		canvas,
    		version,
    		contributors1,
    		contributors2,
    		contributors3,
    		getReleaseVersion,
    		getContributors,
    		$org,
    		$repo,
    		$storeId
    	});

    	$$self.$inject_state = $$props => {
    		if ("canvas" in $$props) $$invalidate(0, canvas = $$props.canvas);
    		if ("version" in $$props) $$invalidate(1, version = $$props.version);
    		if ("contributors1" in $$props) $$invalidate(2, contributors1 = $$props.contributors1);
    		if ("contributors2" in $$props) $$invalidate(3, contributors2 = $$props.contributors2);
    		if ("contributors3" in $$props) $$invalidate(4, contributors3 = $$props.contributors3);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		canvas,
    		version,
    		contributors1,
    		contributors2,
    		contributors3,
    		$org,
    		$repo,
    		$storeId,
    		canvas_1_binding
    	];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const app = new App({
    	target: document.body
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
