#ifndef Queue_hpp
#define Queue_hpp

#include <stdio.h>

using namespace std;

namespace DataStructures {
template<typename T,class C> class Queue final {
    C* structure;
public:
    Queue<T,C>();
    ~Queue<T,C>();
    
    int getLength();
    void push(T value);
    T shift();
};
template<typename T,class C> Queue<T,C>::Queue(){
    structure = new C;
}
template<typename T,class C> Queue<T,C>::~Queue(){
    delete structure;
}
template<typename T,class C> int Queue<T,C>::getLength(){
    return structure->getLength();
}
template<typename T,class C> void Queue<T,C>::push(T value){
    structure->insert(getLength(),value);
}
template<typename T,class C> T Queue<T,C>::shift(){
    return structure->pull(0);
}
};
#endif
