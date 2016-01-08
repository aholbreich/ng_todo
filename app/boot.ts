import {bootstrap}   from 'angular2/platform/browser';
import {TodoApp}     from './todo_app';
import {TodoService} from './todo_service';


/**
 * Injecting of ROUTER_PROVIDERS DialogService, HeroService. See @Injectable()
 */
bootstrap(TodoApp, [TodoService]);