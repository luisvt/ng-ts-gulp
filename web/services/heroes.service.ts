import IPromise = angular.IPromise;
import IHttpService = angular.IHttpService;
import {Service, Inject} from 'ngts-annotations/src/at-angular';

export interface Hero {

}

@Service()
export class HeroesService {
    /* @ngInject */
    constructor(@Inject('$http') private $http: IHttpService){}

    get(id: number) : IPromise<Hero> {
        return this.$http.get(`heroes/${id}`);
    }

    query(params: any) : IPromise<Array<Hero>> {
        return this.$http.get(`heroes`, params);
    }
}
