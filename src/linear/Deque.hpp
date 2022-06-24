#ifndef Deque_hpp
#define Deque_hpp

#include <stdio.h>

using namespace std;

namespace DataStructures {
template<typename T,class C> class Deque final {
    C* structure;
public:
    Deque<T,C>();
    ~Deque<T,C>();
    
    int getLength();
    void push(T value);
    T shift();
    void unshift(T value);
    T pop();
};
template<typename T,class C> Deque<T,C>::Deque(){
    structure = new C;
}
template<typename T,class C> Deque<T,C>::~Deque(){
    delete structure;
}
template<typename T,class C> int Deque<T,C>::getLength(){
    return structure->getLength();
}
template<typename T,class C> void Deque<T,C>::push(T value){
    structure->insert(getLength(),value);
}
template<typename T,class C> T Deque<T,C>::pop(){
    return structure->pull(getLength()-1);
}
template<typename T,class C> void Deque<T,C>::unshift(T value){
    structure->insert(0,value);
}
template<typename T,class C> T Deque<T,C>::shift(){
    return structure->pull(0);
}
};
#endif
